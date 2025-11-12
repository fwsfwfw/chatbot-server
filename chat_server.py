import openai
from openai import OpenAI
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from pathlib import Path
from hashlib import sha256
from PIL import Image
import json
import os
import ssl
import base64
import urllib3
import time
from queue import Queue
from threading import Thread
import traceback
import httpx  # ← נדרש בשביל לקוח מותאם ל־openai
from io import BytesIO
import cairosvg  # ← נדרש להמרת SVG ל־PNG
import argparse

def convert_svg_to_png_bytes(svg_path: str) -> bytes:
    try:
        with open(svg_path, "rb") as svg_file:
            svg_data = svg_file.read()
        png_bytes = cairosvg.svg2png(bytestring=svg_data)
        return png_bytes
    except Exception as e:
        print(f"⚠️ שגיאה בהמרת SVG ל־PNG: {e}")
        return None

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
requests.packages.urllib3.disable_warnings()
ssl._create_default_https_context = ssl._create_unverified_context

api_key = "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"
api_key_clean = api_key.replace("\u200f", "")  # הסרת תווים נסתרים

client = OpenAI(api_key=api_key_clean)

MODEL_NAME = "gpt-4o"

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.join(os.getcwd(), "xaxa_browser")
os.makedirs(BASE_DIR, exist_ok=True)

CACHE_FILE = os.path.join(BASE_DIR, "zicaron.json")
IMAGE_FOLDER = os.path.join(BASE_DIR, "sif_images")
os.makedirs(IMAGE_FOLDER, exist_ok=True)

check_queue = Queue()

if os.path.exists(CACHE_FILE):
    try:
        with open(CACHE_FILE, "r", encoding="utf-8") as f:
            checked_cache = json.load(f)
    except:
        checked_cache = {}
else:
    checked_cache = {}

def save_cache():
    with open(CACHE_FILE, "w", encoding="utf-8") as f:
        json.dump(checked_cache, f, ensure_ascii=False, indent=2)

def hash_file_name(file_name):
    return sha256(file_name.encode('utf-8')).hexdigest() + ".png"

def check_worker():
    while True:
        file_path, file_name = check_queue.get()

        # אם היו כבר 2 שגיאות קודמות – לדלג
        if checked_cache.get(f"{file_name}_errors", 0) >= 2:
            print(f"⏩ דילוג על {file_name} – עקב 2 שגיאות קודמות")
            check_queue.task_done()
            continue

        try:
            # קריאה לקובץ
            if file_path.lower().endswith(".svg"):
                image_bytes = convert_svg_to_png_bytes(file_path)
                if not image_bytes:
                    raise ValueError("שגיאה בהמרת SVG ל־PNG")
            else:
                with open(file_path, "rb") as f:
                    image_bytes = f.read()

            if not image_bytes:
                raise ValueError("תמונה ריקה – לא נשלחת לבדיקה")

            encoded = base64.b64encode(image_bytes).decode("utf-8")

            if not encoded.strip():
                raise ValueError("base64 ריק – לא ניתן לשלוח ל־OpenAI")

            # ✅ קריאה חדשה ל‑OpenAI
            response = client.chat.completions.create(
                model=MODEL_NAME,
                messages=[
                    {
                        "role": "user",
                        "content": "האם יש בתמונה אישה? תענה במילה אחת: כן או לא."
                    }
                ],
                max_tokens=10,
                temperature=0,
            )

            print("🔵 OpenAI response:", response)

            try:
                if isinstance(response, str):
                    result_text = response.strip().lower().strip(".!,? ")
                elif hasattr(response, "choices"):
                    result_text = response.choices[0].message.content.strip().lower().strip(".!,? ")
                else:
                    print("⚠️ תגובה לא צפויה מ־OpenAI:", type(response))
                    result_text = "כן"
            except Exception as e:
                print("⚠️ שגיאה בפיענוח תשובת OpenAI:", e)
                result_text = "כן"

            if result_text == "כן":
                result = True
            elif result_text == "לא":
                result = False
            else:
                print(f"⚠️ תשובה חריגה מ־OpenAI: '{result_text}' → מפרש כברירת מחדל כחסום (כן)")
                result = True

            checked_cache[file_name] = "כן" if result else "לא"
            save_cache()

            print(f"🧪 נבדק מתור: {'🚫 יש אישה' if result else '✅ אין אישה'} → {file_name}")

        except Exception as e:
            checked_cache[file_name] = "כן"  # ברירת מחדל: חסום
            save_cache()
            print("❌ שגיאה בבדיקה מתור:", e)

        check_queue.task_done()
        time.sleep(0.001)  # ⏱ האטה של 10ms בין בדיקות

@app.route("/save-image", methods=["POST"])
def save_image():
    # ✨ אם קיבלנו JSON עם כתובת URL בלבד (שלב גיבוי להורדה מהשרת)
    if request.content_type == "application/json":
        try:
            data = request.get_json()
            url = data.get("url")

            if not url:
                return jsonify({"status": "שגיאה: חסר שדה url"}), 400

            hash_hex = sha256(url.encode()).hexdigest()
            file_path = os.path.join(IMAGE_FOLDER, f"{hash_hex}.png")

            # הורדה ובדיקה
            res = requests.get(url, timeout=10, verify=False)
            if res.status_code != 200:
                return jsonify({"status": f"שגיאה בקבלת קובץ: {res.status_code}"}), 400

            with open(file_path, "wb") as f:
                f.write(res.content)

            return jsonify({"status": "הצלחה", "file_name": f"{hash_hex}.png"})

        except Exception as e:
            print("❌ שגיאה בהורדת URL מהלקוח:", e)
            return jsonify({"status": f"שגיאה: {str(e)}"}), 500

    # 🧩 אחרת – נשלח קובץ בינארי רגיל (octet-stream)
    elif request.content_type == "application/octet-stream":
        orig_file_name = request.headers.get("X-Filename")
        if not orig_file_name:
            return jsonify({"status": "שגיאה: לא נשלח שם קובץ"}), 400

        file_name = hash_file_name(orig_file_name)
        file_path = os.path.join(IMAGE_FOLDER, file_name)

        try:
            image_data = request.get_data()
            if not image_data:
                return jsonify({"status": "שגיאה: גוף ריק"}), 400

            with open(file_path, "wb") as f:
                f.write(image_data)

            return jsonify({"status": "הצלחה", "file_name": file_name})
        except Exception as e:
            print("❌ שגיאה בשמירת תמונה:", str(e))
            return jsonify({"status": f"שגיאה: {str(e)}"}), 500

    # ⛔ פורמט לא נתמך
    return jsonify({"status": "שגיאה: סוג תוכן לא נתמך"}), 400

@app.route("/check", methods=["POST"])
def check_image():
    data = request.get_json()
    orig_file_name = data.get("file_name")
    base64_data = data.get("base64")

    if not orig_file_name and not base64_data:
        return jsonify({"result": "שגיאה: לא נשלח שם קובץ או base64"})

    file_name = hash_file_name(orig_file_name) if orig_file_name else hash_file_name("base64_image")
    file_path = os.path.join(IMAGE_FOLDER, file_name)

    # ניסיון לשחזור קובץ אם נשלח base64
    if base64_data:
        try:
            b64 = base64_data.split(",")[1]
            with open(file_path, "wb") as f:
                f.write(base64.b64decode(b64))
        except Exception as e:
            print("❌ שגיאה בשחזור base64:", str(e))
            return jsonify({"result": "שגיאה"})

    # אם הקובץ לא קיים – מחזיר "ממתין"
    if not os.path.isfile(file_path):
        print(f"⏳ קובץ לא נמצא עדיין: {file_name}")
        return jsonify({"result": "כן"})

    try:
        with open(file_path, "rb") as img_file:
            encoded = base64.b64encode(img_file.read()).decode("utf-8")

            # ✅ קריאה חדשה ל‑OpenAI
            response = client.chat.completions.create(
                model=MODEL_NAME,
                messages=[
                    {
                        "role": "user",
                        "content": "האם יש בתמונה אישה? תענה במילה אחת: כן או לא."
                    }
                ],
                max_tokens=10,
                temperature=0,
            )

            print("🔵 OpenAI response:", response)

        try:
            result_text = response.choices[0].message.content.strip().lower().strip(".!,? ")
        except Exception as e:
            print("⚠️ שגיאה בפיענוח תשובת OpenAI:", e)
            result_text = "כן"

        if result_text == "כן":
            checked_cache[file_name] = "כן"
        elif result_text == "לא":
            checked_cache[file_name] = "לא"
        else:
            print(f"⚠️ תשובה חריגה מ־openai: '{result_text}' → מפרש כברירת מחדל כחסום (כן)")
            checked_cache[file_name] = "כן"

        save_cache()

        print(f"🔎 בקשה לבדיקה: {file_name}")
        print(f"🧠 תשובת openai: {result_text}")
        print(f"📤 נשלח חזרה לסקריפט: {checked_cache[file_name]}")

        return jsonify({"result": checked_cache[file_name]})

    except Exception as e:
        print("❌ שגיאה בבדיקה מול openai:", repr(e))
        traceback.print_exc()

        with open("error_log.txt", "a", encoding="utf-8") as log_file:
            log_file.write(f"\n❌ שגיאה בתאריך {time.ctime()}:\n")
            log_file.write(repr(e) + "\n")
            traceback.print_exc(file=log_file)

        return jsonify({"result": "שגיאה"})

# הפעלת תהליך רקע לבדיקת התמונות
Thread(target=check_worker, daemon=True).start()

@app.route("/proxy")
def proxy_image():
    url = request.args.get("url")
    if not url:
        return "Missing url", 400

    try:
        headers = {
            "User-Agent": "Mozilla/5.0",  # ← זה חשוב
        }
        resp = requests.get(url, headers=headers, stream=True, timeout=10, verify=False)
        return resp.content, resp.status_code, {
            "Content-Type": resp.headers.get("Content-Type", "image/png")
        }
    except Exception as e:
        return f"Proxy error: {str(e)}", 500

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8000)
    args = parser.parse_args()

    # מאזין לכל הכתובות, לא רק ל-127.0.0.1
    app.run(host='0.0.0.0', port=args.port)






