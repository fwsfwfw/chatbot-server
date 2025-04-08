from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os

# הכנסת מפתח API של Gemini
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY") or "AIzaSyAoTsd6CAYNgTrsAwCHIBx53ge2CeRY-FE"  # הכנס כאן את המפתח שלך

# הגדרת המודל
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    prompt = data.get("prompt", "").strip()
    instructions = data.get("instructions", "אתה עוזר אישי בתוך מערכת סינון תכנים אתה עונה רק על שאלות שקשורות לעזרה או לשאלות לגבי הסינון.")

    if not prompt:
        return jsonify({"reply": "אין שאלה."})

    try:
        response = model.generate_content(
            [
                instructions,
                prompt
            ],
            generation_config={"max_output_tokens": 500}
        )
        reply = response.text.strip()
        return jsonify({"reply": reply})
    except Exception as e:
        return jsonify({"reply": f"שגיאה: {str(e)}"})

if __name__ == "__main__":
    app.run(port=8000)