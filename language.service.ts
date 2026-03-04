import { Injectable, signal, computed } from '@angular/core';

export type Language = 'he' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<Language>('he');
  
  toggleLanguage() {
    this.currentLang.update(lang => lang === 'he' ? 'en' : 'he');
  }

  content = computed(() => this.currentLang() === 'he' ? this.he : this.en);
  
  // Hebrew Data
  private he = {
    dir: 'rtl',
    lang: 'he',
    common: {
        readMore: 'קרא עוד',
        moreInfo: 'למידע נוסף',
        switchToEnglish: 'Switch to English',
        logoSubtitle: 'תמיד לגלוש בטוח',
        logoTitle: 'SafeNet',
        homePage: 'דף הבית',
        institute: 'SafeNet'
    },
    navbar: {
        about: 'אודות המערכת',
        tech: 'טכנולוגיה',
        kashrut: 'כשרות',
        download: 'הורדה',
        login: 'כניסה לאזור אישי'
    },
    hero: {
        btnDownload: 'להורדת התוכנה',
        btnHow: 'איך זה עובד?',
        chat: 'צ\'אט',
        call: 'חייג',
        slides: [
          {
            title: 'סינון אינטרנט הלכתי',
            subtitle: 'לפי הוראות הרבנים שליט"א',
            description: 'מערכת סינון המקפידה על כל כללי ההלכה בשולחן ערוך. סינון הלכתי מדויק עד קוצו של יוד, בפיקוח רבני הדוק.',
            image: 'https://picsum.photos/seed/man_smile/600/600',
            badge1: 'כשר למהדרין',
            badge2: 'בפיקוח רבני'
          },
          {
            title: 'בינה מלאכותית מתקדמת',
            subtitle: 'סינון חכם ומדויק',
            description: 'טכנולוגיית AI מתקדמת המסננת תמונות, סרטונים, ומלל בזמן אמת. המערכת מזהה תכנים בעייתיים ומסירה אותם לעני המשתמש בגלישה.',
            image: 'https://picsum.photos/seed/ai_tech/600/600',
            badge1: 'AI מתקדם',
            badge2: 'סינון אוטומטי'
          },
          {
            title: 'מרחב דיגיטלי נקי ומוגן',
            subtitle: 'שלווה אמיתית בגלישה',
            description: 'חוויית אינטרנט בטוחה ושקטה, המאפשרת שימוש מלא באתרים חיוניים תוך שמירה מוקפדת על ההלכה והאווירה הרוחנית בבית.',
            image: 'https://picsum.photos/seed/office_meeting/600/600',
            badge1: 'הלכה למעשה',
            badge2: 'סינון מחמיר'
          }
        ]
    },
    concept: {
        title: 'גישת סינון מתקדמת',
        desc: 'המערכת של SafeNet מבוססת על בינה מלאכותית מתקדמת הסורקת בזמן אמת תמונות, סרטונים וטקסטים ולא רק כתובות אתרים. במקום חסימה גורפת של אתרים שלמים, המערכת מנתחת את התוכן עצמו ומבדילה בדיוק גבוה בין מותר לאסור, בהתאם להנחיות הלכתיות ברורות. בעידן שבו האינטרנט הוא כלי עבודה חיוני, SafeNet מאפשרת שימוש מלא, מקצועי ויעיל ברשת תוך שמירה קפדנית על ערכי התורה והלכה.',
        cards: [
            {
                title: 'סינון לפי ההלכה',
                desc: 'הסינון נבנה על פי הוראות גדולי ישראל ופוסקי הדור. התוכנה מסננת כל תוכן שאינו מתאים ליהודי בן תורה.'
            },
            {
                title: 'חסימה ברמת המערכת',
                desc: 'בניגוד לתוספי דפדפן שניתן להסיר בקלות, התוכנה יושבת כדרייבר ברמת מערכת ההפעלה. היא מנטרת את כל התעבורה היוצאת והנכנסת למחשב.'
            },
            {
                title: 'ללא עקיפות ופרצות',
                desc: 'מנגנון הגנה חכם המונע גלישה דרך VPN חיצוני, פרוקסי אנונימי או שינוי DNS. אם התוכנה מזהה ניסיון עקיפה, היא חוסמת את הגישה לרשת באופן מיידי.'
            }
        ],
        howItWorksTitle: 'איך זה עובד בפועל?',
        howItWorksItems: [
            { title: 'רשימה לבנה/שחורה, לאתרים/דפים', desc: 'בודקים אנושים יושבים ובודקים אתרים הנשלחים לבדיקה והמערכת חוסמת ופותחת דפים באתר עצמו לפי בדיקה.' },
            { title: 'בינה מלאכותית מתקדמת לתמונות', desc: 'טכנולוגיית AI וראייה ממוחשבת מתקדמת מזהה ומסננת תמונות בעייתיות בזמן אמת אנו משתמשים בתוכנולוגיה מתקדמת ובהנחיות מדוייקות למודל שלנו שמצטיין בניתוח וזהוי תמונות ותוכן העמוק בהם.' },
            { title: 'סינון סרטונים מתקדם', desc: 'מערכת AI מתקדמת סורקת סרטונים, מזהה קטעים בעייתיים פותחת וחוסמת ומצנזרת אותם בדיוק אפשרי.' },
            { title: 'סנן מלל מתקדם', desc: 'סנן מלל מתקדם AI לעיבוד שפה טבעית (NLP) מזהה מילים ותכנים בעייתיים בטקסט ומסנן אותם לפי הנחיות הלכתיות באופן אוטומטי בהבנה עמוקה של הקשר הטקסט בכל השפות.' }
        ]
    },
    tech: {
        title: 'טכנולוגיות מתקדמות',
        subtitle: 'הכוח שמאחורי הקלעים: ארכיטקטורה יציבה ומאובטחת.',
        features: [
            { title: 'מהירות ויעילות', desc: 'ביצועים מהירים ללא האטה משמעותית בגלישה באתרים' },
            { title: 'ניהול מרכזי', desc: 'עדכוני הגדרות באמצעות האיזור אישי ומערכת הפניות בצורה אוטומטית' },
            { title: 'תעבורה מוצפנת', desc: 'גלישתכם בטוחה והעברת נתוני הגלישה נעשית בצורה בטוחה' },
            { title: 'עדכונים חיים', desc: 'הסינון הולך ומשתפר ומתעדכן במשך הזמן ושיפור הגלישה באינטרנט' }
        ],
        levelsTitle: 'התאמה אישית לפי צרכי הגלישה האישית',
        levelsDesc: 'ניתן להגדיר באיזור האישי את מסלול הגלישה היעודיי עבורכם וכן ניתן לבחור בקהילות אשר יפקחו על גלישתכם.'
    },
    steps: {
        title: 'התקנה פשוטה ומהירה',
        fastInstall: 'התקנה מהירה',
        desc: 'אין צורך בידע טכני מוקדם. המערכת מותקנת במספר שלבים פשוטים ומתחילה להגן על המחשב באופן מיידי.',
        list: [
            { title: 'הורדת קובץ ההתקנה', desc: 'לחץ על כפתור ההורדה למטה ושמור את הקובץ במחשבך.' },
            { title: 'הפעלת האשף', desc: 'פתח את הקובץ ועקוב אחר ההוראות הפשוטות על המסך.' },
            { title: 'יצירת חשבון', desc: 'הזן את פרטיך האישיים ובחר את מסלול הסינון הרצוי.' },
            { title: 'הגדרת תשלום', desc: 'בחר תוכנית מנוי והזן פרטי תשלום להפעלת המערכת.' },
            { title: 'זהו, המחשב מוגן!', desc: 'התוכנה פועלת ברקע. כעת ניתן לגלוש בבטחה.' }
        ],
        btn: 'מעבר לדף ההתקנה',
        note: 'תומך ב-Windows 10/11. גרסת Mac בפיתוח.',
        interface: 'ממשק ניהול אישי'
    },
    infoPage: {
      btnBack: 'חזרה לדף הבית',
      header: {
        title: 'מרכז מידע ותמיכה',
        subtitle: 'כל מה שרציתם לדעת על מערכת SafeNet – במקום אחד'
      },
      about: {
        title: 'אודות SafeNet',
        text1: 'SafeNet הוקם במטרה לתת מענה טכנולוגי הלכתי לאתגרי הדור. אנו מאמינים כי הטכנולוגיה היא כלי רב עוצמה שיכול לשמש לקדושה וללימוד תורה, אך בד בבד היא טומנת בחובה סיכונים רוחניים שאין להתעלם מהם.',
        text2: 'המערכת שפיתחנו היא פרי עמל של שנים, בשיתוף אנשי טכנולוגיה בכירים ובהכוונת רבנים ופוסקי הדור. המטרה שלנו היא לא רק "לחסום", אלא לאפשר – לאפשר חיים דיגיטליים בטוחים ונקיים לפי כל כללי ההלכה, מבלי להתפשר על איכות הגלישה או על הצרכים המקצועיים של המשתמש.'
      },
      methodology: {
        title: 'איך זה עובד לעומק?',
        cards: [
          { title: 'בינה מלאכותית (AI)', text: 'המערכת משתמשת במודלים מתקדמים של ראייה ממוחשבת כדי לסרוק כל תמונה ותמונה שנטענת בדפדפן. המערכת יודעת לזהות עור חשוף, תכנים לא צנועים ואלמנטים ויזואליים בעייתיים – ולטשטש אותם באלפיות השנייה, עוד לפני שהם מוצגים למשתמש.' },
          { title: 'ניתוח סמנטי בזמן אמת', text: 'מעבר לרשימות "שחורות" ו"לבנות", המערכת קוראת את הטקסט בעמוד. אם אתר חדשות לגיטימי מפרסם כתבה עם תוכן בעייתי, המערכת תדע לחסום רק את הכתבה הספציפית הזו, מבלי לפגוע בגישה לשאר האתר.' },
          { title: 'הגנת Man-in-the-Middle', text: 'כדי לסנן תעבורה מוצפנת (HTTPS), התוכנה מבצעת פענוח מקומי של התעבורה, בודקת אותה ומצפינה אותה מחדש. תהליך זה מאובטח לחלוטין ומתבצע אך ורק על המחשב המקומי שלכם, ללא חשיפת המידע לשרתים חיצוניים.' }
        ]
      },
      faq: {
        title: 'שאלות ותשובות נפוצות',
        items: [
          { q: 'האם התוכנה מאטה את המחשב?', a: 'ההשפעה על ביצועי המחשב היא מינימלית ביותר. מנוע הסינון עבר אופטימיזציה (Code Optimization) כדי לנצל משאבים מועטים, והוא פועל ביעילות גם על מחשבים ישנים יחסית.' },
          { q: 'האם אפשר להתקין על מחשב של העבודה?', a: 'בהחלט. יש לנו מסלול עסקי המותאם למשרדים, המאפשר גישה לכלי עבודה, תוכנות שליטה מרחוק, זום ועוד, תוך חסימת תכני פנאי ורשתות חברתיות.' },
          { q: 'מה קורה אם אני צריך אתר שנחסם בטעות?', a: 'במערכת הניהול האישית יש אפשרות לשלוח "פנייה לבדיקה". צוות בודקים אנושי יושב במשמרות סביב השעון, בודק את האתר ומאשר אותו (או מסביר מדוע הוא חסום) בתוך זמן קצר.' },
          { q: 'האם המערכת תומכת במאק (Mac)?', a: 'נכון להיום הגרסה המלאה תומכת במערכות Windows 10 ו-Windows 11. גרסה למחשבי Apple נמצאת בשלבי פיתוח מתקדמים ותשוחרר בקרוב.' }
        ]
      }
    },
    contact: {
        title: 'לשיחה עם נציג',
        subtitle: 'נשמח לעמוד לשירותכם ולענות על כל שאלה',
        description: 'רוצים לשמוע עוד על הסינון ההלכתי או לקבל ייעוץ מקצועי? השאירו לנו את הפרטים שלכם ונחזור אליכם בהקדם.',
        namePlaceholder: 'שם מלא',
        phonePlaceholder: 'מספר טלפון',
        btnSubmit: 'חזרו אלי',
        successMessage: 'תודה! ניצור איתך קשר בהקדם',
        errorMessage: 'אירעה שגיאה, אנא נסה שוב'
    },
    footer: {
        about: 'מערכת סינון אינטרנט הלכתית לפי הוראות הרבנים שליט"א. סינון מדויק המקפיד על כל כללי ההלכה.',
        linksTitle: 'קישורים מהירים',
        legalTitle: 'מידע משפטי',
        contactTitle: 'צרו קשר',
        legalLinks: ['תקנון שימוש', 'מדיניות פרטיות', 'הצהרת נגישות'],
        copyright: '© 2024 SafeNet. כל הזכויות שמורות.',
        credit: 'נבנה באמצעות Angular & Tailwind'
    },
    demo: {
        title: 'הדגמת המערכת הסינון בפעולה',
        subtitle: 'צפו כיצד המערכת מסננת תמונות וסרטונים בזמן אמת כדי לשמור על גלישה בטוחה'
    },
    kashrut: {
        title: 'כשרות מערכת הסינון',
        subtitle: 'בפיקוח הדוק',
        intro: 'מערכת הסינון שלנו עברה בדיקה קפדנית ונמצאת תחת השגחת הרבנים',
        description: 'המערכת נמצאת תחת השגחת בד"ץ בני ברק ובהכשר ביצור חומות הדת, ונמצאת בפיקוח מתמיד מצד רבנים על מנת להבטיח את הסינון הטוב ביותר לציבור שומרי התורה'
    },
    termsOfService: {
      title: 'תקנון שימוש',
      lastUpdated: 'עדכון אחרון: פברואר 2024',
      sections: [
        {
          title: '1. הגדרות',
          content: 'בתקנון זה, "החברה" משמעה SafeNet בע"מ, "המערכת" משמעה תוכנת הסינון ושירותי הסינון הנלווים, "המשתמש" משמעה כל אדם או ארגון המשתמש במערכת.'
        },
        {
          title: '2. תנאי שימוש כלליים',
          content: 'השימוש במערכת SafeNet כפוף לתקנון זה ולכל דין. המשתמש מתחייב להשתמש במערכת אך ורק למטרות חוקיות ובהתאם להוראות התקנון. השימוש במערכת מהווה הסכמה מלאה לתנאי תקנון זה.'
        },
        {
          title: '3. רישיון שימוש',
          content: 'החברה מעניקה למשתמש רישיון שימוש אישי, לא ייחודי ובלתי ניתן להעברה, לשימוש במערכת. הרישיון תקף כל עוד המנוי פעיל ובתנאי שהמשתמש עומד בכל תנאי תקנון זה. אין להעתיק, לשכפל, להפיץ או למכור את התוכנה או חלק ממנה ללא אישור בכתב מהחברה.'
        },
        {
          title: '4. תשלום ומנוי',
          content: 'השימוש במערכת כרוך בתשלום דמי מנוי חודשיים או שנתיים בהתאם לתוכנית שנבחרה. התשלום יבוצע באמצעות כרטיס אשראי או אמצעי תשלום אחר שאושר על ידי החברה. אי תשלום במועד עלול להביא להפסקת השירות. החברה רשאית לשנות את תעריפי המנוי בהודעה מראש של 30 יום.'
        },
        {
          title: '5. ביטול והחזרים',
          content: 'ניתן לבטל את המנוי בכל עת דרך אזור האישי באתר. ביטול המנוי יכנס לתוקף בתום תקופת החיוב השוטפת. החברה אינה מחזירה תשלומים עבור תקופות שכבר חויבו, למעט במקרים חריגים שייקבעו על פי שיקול דעתה הבלעדי של החברה.'
        },
        {
          title: '6. אחריות המשתמש',
          content: 'המשתמש אחראי באופן בלעדי לשמירה על סודיות פרטי ההתחברות שלו למערכת. כל פעילות שתבוצע באמצעות חשבונו של המשתמש תיחשב כאילו בוצעה על ידי המשתמש עצמו. המשתמש מתחייב לדווח לחברה באופן מיידי על כל שימוש לא מורשה בחשבונו.'
        },
        {
          title: '7. הגבלת אחריות',
          content: 'המערכת ניתנת "כמות שהיא" (AS IS) ללא כל אחריות מפורשת או משתמעת. החברה אינה אחראית לכל נזק ישיר או עקיף שייגרם למשתמש עקב השימוש או אי היכולת להשתמש במערכת. החברה עושה מאמצים לספק שירות רציף ויציב, אך אינה מתחייבת שהשירות יהיה זמין בכל עת וללא הפרעות.'
        },
        {
          title: '8. שינויים בתקנון',
          content: 'החברה רשאית לשנות תקנון זה מעת לעת. שינויים מהותיים יפורסמו באתר ו/או יישלחו למייל של המשתמש. המשך השימוש במערכת לאחר פרסום השינויים מהווה הסכמה לתקנון המעודכן.'
        },
        {
          title: '9. סמכות שיפוט',
          content: 'על תקנון זה יחולו אך ורק דיני מדינת ישראל. סמכות השיפוט הבלעדית בכל סכסוך הנובע מתקנון זה או מהשימוש במערכת תהיה לבתי המשפט המוסמכים בתל אביב-יפו.'
        }
      ]
    },
    privacyPolicy: {
      title: 'מדיניות פרטיות',
      lastUpdated: 'עדכון אחרון: פברואר 2024',
      sections: [
        {
          title: '1. מבוא',
          content: 'SafeNet מכבדת את פרטיותך ומתחייבת להגן על המידע האישי שלך. מדיניות פרטיות זו מסבירה אילו נתונים אנו אוספים, כיצד אנו משתמשים בהם, ואיך אנו שומרים עליהם. השימוש במערכת מהווה הסכמה למדיניות פרטיות זו.'
        },
        {
          title: '2. איסוף מידע',
          content: 'אנו אוספים מידע אישי שאתה מספק בעת יצירת חשבון: שם, כתובת דוא"ל, מספר טלפון ופרטי תשלום. בנוסף, אנו אוספים מידע טכני: כתובת IP, סוג דפדפן, מערכת הפעלה, ונתוני שימוש בשירות. המערכת גם שומרת יומני גלישה (URLs) לצורך שיפור הסינון, אך לא שומרת את תוכן העמודים עצמם.'
        },
        {
          title: '3. שימוש במידע',
          content: 'אנו משתמשים במידע שנאסף לצורך: מתן ושיפור השירות, ניהול החשבון שלך, עיבוד תשלומים, שליחת עדכונים והודעות חשובות, שיפור מנגנוני הסינון והגנה מפני שימוש לרעה, ומילוי חובות חוקיות. המידע האישי שלך לא יימכר לצדדים שלישיים ולא ישותף אלא במקרים המפורטים במדיניות זו.'
        },
        {
          title: '4. אבטחת מידע',
          content: 'אנו נוקטים באמצעי אבטחה מתקדמים להגנה על המידע שלך, כולל הצפנת SSL/TLS לכל התקשורת, אחסון מאובטח בשרתים מוגנים, הגבלת גישה למידע לעובדים מורשים בלבד, ועדכוני אבטחה שוטפים. למרות מאמצינו, אין טכנולוגיה שהיא בטוחה ב-100%, ואנו ממליצים לשמור על סיסמאות חזקות ולא לשתף אותן עם אחרים.'
        },
        {
          title: '5. שיתוף מידע עם צדדים שלישיים',
          content: 'אנו עשויים לשתף מידע עם: ספקי שירותי תשלום (לעיבוד עסקאות), ספקי אחסון ותשתיות ענן, רשויות אכיפת החוק (בהתאם לדרישות חוקיות), ושותפים עסקיים (רק במידה הדרושה לצורך מתן השירות ובהתאם להסכמי סודיות). כל צד שלישי שאנו עובדים איתו מחויב לשמור על פרטיותך ואבטחת המידע.'
        },
        {
          title: '6. זכויותיך',
          content: 'לך הזכויות הבאות לגבי המידע האישי שלך: לעיין במידע שאנו מחזיקים עליך, לבקש תיקון מידע שגוי, לבקש מחיקת המידע (בכפוף לחובות חוקיות), להתנגד לשימושים מסוימים במידע, ולבקש העברת המידע לספק אחר. לממש זכויות אלו, פנה אלינו באמצעות פרטי הקשר שבסוף מדיניות זו.'
        },
        {
          title: '7. עוגיות (Cookies)',
          content: 'האתר שלנו משתמש בעוגיות לשיפור חווית המשתמש, שמירה על העדפותיך, וניתוח דפוסי שימוש. ניתן לנהל או לחסום עוגיות דרך הגדרות הדפדפן שלך, אך זה עלול להשפיע על תפקוד האתר.'
        },
        {
          title: '8. שינויים במדיניות',
          content: 'אנו רשאים לעדכן מדיניות פרטיות זו מעת לעת. שינויים מהותיים יפורסמו באתר ו/או יישלחו למייל שלך. אנו ממליצים לעיין במדיניות מדי פעם כדי להישאר מעודכן.'
        },
        {
          title: '9. יצירת קשר',
          content: 'לשאלות או בקשות בנוגע למדיניות פרטיות זו, ניתן לפנות אלינו בדוא"ל: privacy@safenet.co.il או בטלפון: 03-1234567. נשתדל לענות על פנייתך בהקדם האפשרי.'
        }
      ]
    },
    accessibilityStatement: {
      title: 'הצהרת נגישות',
      lastUpdated: 'עדכון אחרון: פברואר 2024',
      sections: [
        {
          title: '1. מחויבות לנגישות',
          content: 'SafeNet מחויבת להנגיש את שירותיה לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות. אנו פועלים על פי תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013, ועל פי תקן הנגישות הישראלי (ת"י 5568) ברמת AA.'
        },
        {
          title: '2. התאמות נגישות באתר',
          content: 'האתר שלנו כולל את ההתאמות הבאות: ניווט באמצעות מקלדת בלבד, תמיכה בתוכנות קריאת מסך (Screen Readers), ניגודיות גבוהה לטקסטים, אפשרות להגדלת טקסטים, תיוג נכון של כל האלמנטים הגרפיים, מבנה HTML סמנטי וברור, כפתורים ושדות טפסים נגישים, ואפשרות לדלג לתוכן הראשי.'
        },
        {
          title: '3. התאמות בתוכנה',
          content: 'תוכנת SafeNet עצמה תוכננה תוך מחשבה על נגישות: ממשק משתמש פשוט ואינטואיטיבי, גדלי גופנים ברורים וניתנים לשינוי, ניגודיות צבעים גבוהה, תמיכה בקיצורי מקלדת, והודעות מערכת ברורות ונגישות. אנו ממשיכים לפתח ולשפר את הנגישות בכל עדכון של התוכנה.'
        },
        {
          title: '4. סטנדרטים וטכנולוגיות',
          content: 'האתר נבדק בדפדפנים הנפוצים: Chrome, Firefox, Edge, Safari, ועבר בדיקות עם תוכנות קריאת מסך כגון NVDA ו-JAWS. האתר נבנה בהתאם ל-WCAG 2.1 ברמת AA ומשתמש בטכנולוגיות סטנדרטיות: HTML5, CSS3, ARIA.'
        },
        {
          title: '5. מגבלות נגישות ידועות',
          content: 'למרות מאמצינו, ייתכנו עדיין תכנים שאינם נגישים במלואם: סרטונים ישנים ללא כתוביות, קבצי PDF שלא הונגשו במלואם, ותכנים המסופקים על ידי צדדים שלישיים. אנו עובדים באופן שוטף לטיפול במגבלות אלו.'
        },
        {
          title: '6. משוב ובקשות לסיוע',
          content: 'אם נתקלת בבעיית נגישות או שיש לך הצעות לשיפור, נשמח לשמוע ממך: דוא"ל: accessibility@safenet.co.il, טלפון: 03-1234567 (שלוחה 3), או דרך טופס יצירת הקשר באתר. אנו מתחייבים לטפל בכל פניה בתוך 5 ימי עבודה.'
        },
        {
          title: '7. הסדרי נגישות',
          content: 'במידת הצורך, אנו מספקים הסדרי נגישות אישיים: תמיכה טלפונית מורחבת, עזרה בהתקנה ובהגדרת התוכנה, הדרכה אישית בשימוש במערכת, ומסמכים נגישים בפורמטים שונים (PDF, Word, קבצי קול). כל הסדר מסופק ללא עלות נוספת.'
        },
        {
          title: '8. עדכונים שוטפים',
          content: 'אנו מבצעים בדיקות נגישות תקופתיות, מעדכנים את המערכת בהתאם להנחיות הנגישות העדכניות ביותר, ומשתפים פעולה עם ארגונים לקידום נגישות. הצהרת נגישות זו מעודכנת באופן שוטף לשקף את מצב הנגישות הנוכחי.'
        },
        {
          title: '9. רכז נגישות',
          content: 'רכז הנגישות שלנו: שם: דוד כהן, דוא"ל: david@safenet.co.il, טלפון: 03-1234567 (שלוחה 3). הרכז זמין בימים א\'-ה\' בין השעות 9:00-17:00 לכל שאלה או בקשה הנוגעת לנגישות.'
        }
      ]
    }
  };

  // English Data
  private en = {
    dir: 'ltr',
    lang: 'en',
    common: {
        readMore: 'Read More',
        moreInfo: 'More Information',
        switchToEnglish: 'החלף לעברית',
        logoSubtitle: 'Always surf safe',
        logoTitle: 'SafeNet',
        homePage: 'Home',
        institute: 'SafeNet'
    },
    navbar: {
        about: 'About',
        tech: 'Technology',
        kashrut: 'Certification',
        download: 'Download',
        login: 'Login'
    },
    hero: {
        btnDownload: 'Download Software',
        btnHow: 'How it Works',
        chat: 'Chat',
        call: 'Call',
        slides: [
          {
            title: 'Advanced Filtering System',
            subtitle: 'Fully Supervised',
            description: 'A hermetic internet filtering solution for PC, combining advanced technology with close human supervision. Reliability, stability, and peace of mind.',
            image: 'https://picsum.photos/seed/man_smile/600/600',
            badge1: '100% Safe',
            badge2: 'Active Protection'
          },
          {
            title: 'Advanced AI Technology',
            subtitle: 'Smart & Precise Filtering',
            description: 'Advanced AI technology filters images, videos, and text in real-time. The system identifies problematic content and removes it before it\'s displayed.',
            image: 'https://picsum.photos/seed/ai_tech/600/600',
            badge1: 'Advanced AI',
            badge2: 'Auto Filter'
          },
          {
            title: 'Peace of Mind for Parents',
            subtitle: 'Maximum Home Protection',
            description: 'A smart system ensuring clean internet for the whole family. Full control over content and filtering adapted for children and teens.',
            image: 'https://picsum.photos/seed/kid_computer/600/600',
            badge1: 'Parental Control',
            badge2: 'Smart Filter'
          },
           {
            title: 'Business Efficiency',
            subtitle: 'Fast & Secure Internet',
            description: 'Perfect solution for offices and organizations. Blocking distractions, protection from malware, and maintaining workflow.',
            image: 'https://picsum.photos/seed/office_meeting/600/600',
            badge1: 'Productivity',
            badge2: 'Data Security'
          }
        ]
    },
    concept: {
        title: 'Our Filtering Approach',
        desc: 'Unlike partial solutions, SafeNet operates at the core of the computer. We don\'t just rely on browsers; we provide a complete protective shell.',
        cards: [
            {
                title: 'Value-Based Filtering',
                desc: 'Our filter is built with a deep understanding of the needs of the observant user. We filter not just offensive content but also distractions and inappropriate atmosphere.'
            },
            {
                title: 'System-Level Blocking',
                desc: 'Unlike browser extensions that are easily removed, our software sits as a driver at the OS level, monitoring all incoming and outgoing traffic.'
            },
            {
                title: 'No Loopholes',
                desc: 'Smart protection preventing bypassing via external VPNs, anonymous proxies, or DNS changes. If an attempt is detected, network access is blocked immediately.'
            }
        ],
        howItWorksTitle: 'How it Actually Works',
        howItWorksItems: [
            { title: 'Domain Check', desc: 'Comparison against a white/black list updated daily.' },
            { title: 'Advanced AI for Images', desc: 'Advanced AI and computer vision technology identifies and filters problematic images in real-time - before they appear on screen.' },
            { title: 'Intelligent Video Filtering', desc: 'Advanced AI system scans videos and video files, identifies problematic segments and censors them with surgical precision - the rest remains available.' },
            { title: 'Smart Text Analysis', desc: 'NLP AI engine identifies problematic words and content in text and filters them automatically.' }
        ]
    },
    tech: {
        title: 'Advanced Technologies',
        subtitle: 'The power behind the scenes: Stable and secure architecture.',
        features: [
            { title: 'Local Engine', desc: 'Fast performance without significant browsing slowdown' },
            { title: 'Central Management', desc: 'Remote settings updates without needing a technician' },
            { title: 'Encrypted Traffic', desc: 'Full support for HTTPS (SSL) filtering' },
            { title: 'Live Updates', desc: 'New filter rules received every 24 hours' }
        ],
        levelsTitle: 'Filter Levels & Customization',
        levelsDesc: 'We understand every user has different needs. The system allows choosing pre-defined tracks or full customization.',
        level1: { title: 'Basic + Work', desc: 'Open government sites, banks, email, and essential work tools.', features: ['No Social Networks', 'No News Sites', 'No Video & Streaming'], btn: 'Select Plan' },
        level2: { title: 'Extended & Supervised', tag: 'Most Recommended', desc: 'Allows access to additional sites under close supervision, including strict image filtering.', features: ['Real-time Image Filtering', 'Site Request Option', 'Personal Whitelist'], btn: 'Select Plan' },
        level3: { title: 'Custom Fit', desc: 'Track designed for specific professions (Graphics, Programming, Architecture).', features: ['Professional Categories', 'Ticket System Management', 'Extended Technical Support'], btn: 'Contact Us' },
    },
    steps: {
        title: 'Simple & Fast Installation',
        fastInstall: 'Fast Installation',
        desc: 'No prior technical knowledge needed. The system installs in a few simple steps and starts protecting your computer immediately.',
        list: [
            { title: 'Download Installer', desc: 'Click the download button below and save the file to your computer.' },
            { title: 'Run Wizard', desc: 'Open the file and follow the simple on-screen instructions.' },
            { title: 'Create Account', desc: 'Enter your personal details and choose your desired filter track.' },
            { title: 'Setup Payment', desc: 'Choose a subscription plan and enter payment details to activate the system.' },
            { title: 'Done, PC is Protected!', desc: 'The software runs in the background. You can now browse safely.' }
        ],
        btn: 'Download for Windows',
        note: 'Supports Windows 10/11. Mac version in development.',
        interface: 'Personal Dashboard'
    },
    infoPage: {
      btnBack: 'Back to Home',
      header: {
        title: 'Information & Support Center',
        subtitle: 'Everything you wanted to know about SafeNet system – in one place'
      },
      about: {
        title: 'About SafeNet',
        text1: 'SafeNet was established to provide a technological-Halachic answer to the challenges of our generation. We believe technology is a powerful tool that can be used for holiness, business growth, and learning, but it also carries spiritual and educational risks that cannot be ignored.',
        text2: 'The system we developed is the fruit of years of labor, in collaboration with senior technology experts and under the guidance of Rabbis and educators. Our goal is not just to "block", but to enable – to enable a safe, clean, and productive digital life without compromising browsing quality or professional needs.'
      },
      methodology: {
        title: 'How does it work in depth?',
        cards: [
          { title: 'Artificial Intelligence (AI)', text: 'The system uses advanced computer vision models to scan every single image loaded in the browser. The system detects exposed skin, immodest content, and problematic visual elements – and blurs them in milliseconds, even before they are displayed to the user.' },
          { title: 'Real-Time Semantic Analysis', text: 'Beyond "black" and "white" lists, the system reads the text on the page. If a legitimate news site publishes an article with problematic content, the system will know to block only that specific article without affecting access to the rest of the site.' },
          { title: 'Man-in-the-Middle Protection', text: 'To filter encrypted traffic (HTTPS), the software performs local decryption, inspection, and re-encryption. This process is completely secure and happens solely on your local computer, without exposing data to external servers.' }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          { q: 'Does the software slow down the computer?', a: 'The impact on computer performance is minimal. The filtering engine has undergone optimization to utilize few resources and runs efficiently even on relatively old computers.' },
          { q: 'Can I install it on a work computer?', a: 'Absolutely. We have a business track adapted for offices, allowing access to work tools, remote control software, Zoom, and more, while blocking leisure content and social networks.' },
          { q: 'What happens if I need a blocked site?', a: 'In the personal management system, you can send a "request for review". A human team reviews requests around the clock and approves the site (or explains why it is blocked) within a short time.' },
          { q: 'Does the system support Mac?', a: 'Currently, the full version supports Windows 10 and Windows 11. A version for Apple computers is in advanced development stages and will be released soon.' }
        ]
      }
    },
    contact: {
        title: 'Talk to a Representative',
        subtitle: 'We\'d be happy to assist you and answer any questions',
        description: 'Want to hear more about the Halachic filtering or get professional advice? Leave us your details and we will get back to you soon.',
        namePlaceholder: 'Full Name',
        phonePlaceholder: 'Phone Number',
        btnSubmit: 'Call Me Back',
        successMessage: 'Thank you! We will contact you soon',
        errorMessage: 'An error occurred, please try again'
    },
    footer: {
        about: 'Advanced internet filtering system, combining elite technology with values and tradition. Keeping you safe online.',
        linksTitle: 'Quick Links',
        legalTitle: 'Legal Info',
        contactTitle: 'Contact Us',
        legalLinks: ['Terms of Use', 'Privacy Policy', 'Accessibility Statement'],
        copyright: '© 2024 SafeNet. All rights reserved.',
        credit: 'Built with Angular & Tailwind'
    },
    demo: {
        title: 'System Demo in Action',
        subtitle: 'Watch how the system filters content in real-time'
    },
    kashrut: {
        title: 'System Certification',
        subtitle: 'Under Close Supervision',
        intro: 'Our filtering system has undergone thorough examination and is under rabbinical supervision',
        description: 'The system is under the supervision of the Tel Aviv Rabbinical Court for Technology Matters, and is under constant supervision by the rabbinical court to ensure the best filtering for the Torah-observant community'
    },
    termsOfService: {
      title: 'Terms of Use',
      lastUpdated: 'Last Updated: February 2024',
      sections: [
        {
          title: '1. Definitions',
          content: 'In these Terms, "Company" means SafeNet Ltd., "System" means the filtering software and related filtering services, "User" means any person or organization using the System.'
        },
        {
          title: '2. General Terms of Use',
          content: 'Use of the SafeNet system is subject to these Terms and all applicable laws. User agrees to use the System only for lawful purposes and in accordance with these Terms. Use of the System constitutes full acceptance of these Terms.'
        },
        {
          title: '3. License',
          content: 'Company grants User a personal, non-exclusive, non-transferable license to use the System. License is valid as long as subscription is active and User complies with all Terms. Software or any part thereof may not be copied, duplicated, distributed or sold without written permission from Company.'
        },
        {
          title: '4. Payment and Subscription',
          content: 'Use of the System involves payment of monthly or annual subscription fees according to chosen plan. Payment will be made by credit card or other payment method approved by Company. Non-payment may result in service suspension. Company may change subscription rates with 30 days advance notice.'
        },
        {
          title: '5. Cancellation and Refunds',
          content: 'Subscription may be cancelled at any time through personal area on website. Cancellation takes effect at end of current billing period. Company does not refund payments for periods already charged, except in exceptional cases at Company\'s sole discretion.'
        },
        {
          title: '6. User Responsibility',
          content: 'User is solely responsible for maintaining confidentiality of login credentials. All activity through User\'s account will be deemed as performed by User. User agrees to immediately report any unauthorized use of account to Company.'
        },
        {
          title: '7. Limitation of Liability',
          content: 'System is provided "AS IS" without any express or implied warranty. Company is not liable for any direct or indirect damages to User resulting from use or inability to use System. Company makes efforts to provide continuous and stable service but does not guarantee service will be available at all times without interruptions.'
        },
        {
          title: '8. Changes to Terms',
          content: 'Company may modify these Terms from time to time. Material changes will be posted on website and/or sent to User\'s email. Continued use of System after changes are posted constitutes acceptance of updated Terms.'
        },
        {
          title: '9. Jurisdiction',
          content: 'These Terms shall be governed solely by laws of State of Israel. Exclusive jurisdiction for any dispute arising from these Terms or use of System shall be with competent courts in Tel Aviv-Jaffa.'
        }
      ]
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: February 2024',
      sections: [
        {
          title: '1. Introduction',
          content: 'SafeNet respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and how we protect it. Use of System constitutes acceptance of this Privacy Policy.'
        },
        {
          title: '2. Information Collection',
          content: 'We collect personal information you provide when creating an account: name, email address, phone number and payment details. Additionally, we collect technical information: IP address, browser type, operating system, and service usage data. System also stores browsing logs (URLs) to improve filtering, but does not store page content itself.'
        },
        {
          title: '3. Use of Information',
          content: 'We use collected information to: provide and improve service, manage your account, process payments, send updates and important notices, improve filtering mechanisms and protect against misuse, and fulfill legal obligations. Your personal information will not be sold to third parties and will not be shared except in cases detailed in this policy.'
        },
        {
          title: '4. Information Security',
          content: 'We employ advanced security measures to protect your information, including: SSL/TLS encryption for all communications, secure storage on protected servers, restricted access to information to authorized employees only, and ongoing security updates. Despite our efforts, no technology is 100% secure, and we recommend maintaining strong passwords and not sharing them.'
        },
        {
          title: '5. Sharing Information with Third Parties',
          content: 'We may share information with: payment service providers (for transaction processing), cloud storage and infrastructure providers, law enforcement authorities (as required by law), and business partners (only as necessary to provide service and subject to confidentiality agreements). Any third party we work with is obligated to maintain your privacy and information security.'
        },
        {
          title: '6. Your Rights',
          content: 'You have the following rights regarding your personal information: to view information we hold about you, to request correction of incorrect information, to request deletion of information (subject to legal obligations), to object to certain uses of information, and to request transfer of information to another provider. To exercise these rights, contact us using contact details at end of this policy.'
        },
        {
          title: '7. Cookies',
          content: 'Our website uses cookies to improve user experience, save your preferences, and analyze usage patterns. You can manage or block cookies through your browser settings, but this may affect website functionality.'
        },
        {
          title: '8. Policy Changes',
          content: 'We may update this Privacy Policy from time to time. Material changes will be posted on website and/or sent to your email. We recommend reviewing policy periodically to stay informed.'
        },
        {
          title: '9. Contact',
          content: 'For questions or requests regarding this Privacy Policy, contact us at: email: privacy@safenet.co.il or phone: 03-1234567. We will try to respond to your inquiry as soon as possible.'
        }
      ]
    },
    accessibilityStatement: {
      title: 'Accessibility Statement',
      lastUpdated: 'Last Updated: February 2024',
      sections: [
        {
          title: '1. Commitment to Accessibility',
          content: 'SafeNet is committed to making its services accessible to all, including people with disabilities. We operate according to Equal Rights for People with Disabilities Regulations (Service Accessibility Adjustments), 2013, and Israeli Standard 5568 at AA level.'
        },
        {
          title: '2. Website Accessibility Features',
          content: 'Our website includes the following adjustments: keyboard-only navigation, screen reader software support, high contrast for text, text enlargement option, proper labeling of all graphic elements, clear semantic HTML structure, accessible buttons and form fields, and skip to main content option.'
        },
        {
          title: '3. Software Adjustments',
          content: 'SafeNet software itself was designed with accessibility in mind: simple and intuitive user interface, clear and adjustable font sizes, high color contrast, keyboard shortcut support, and clear accessible system messages. We continue to develop and improve accessibility with each software update.'
        },
        {
          title: '4. Standards and Technologies',
          content: 'Website has been tested in popular browsers: Chrome, Firefox, Edge, Safari, and tested with screen readers such as NVDA and JAWS. Website built according to WCAG 2.1 at AA level and uses standard technologies: HTML5, CSS3, ARIA.'
        },
        {
          title: '5. Known Accessibility Limitations',
          content: 'Despite our efforts, there may still be content that is not fully accessible: old videos without captions, PDF files not fully accessible, and content provided by third parties. We are working continuously to address these limitations.'
        },
        {
          title: '6. Feedback and Assistance Requests',
          content: 'If you encounter an accessibility issue or have suggestions for improvement, we\'d love to hear from you: email: accessibility@safenet.co.il, phone: 03-1234567 (extension 3), or through contact form on website. We commit to addressing every inquiry within 5 business days.'
        },
        {
          title: '7. Accessibility Accommodations',
          content: 'When needed, we provide personal accessibility accommodations: extended phone support, help with software installation and configuration, personal training in system use, and accessible documents in various formats (PDF, Word, audio files). All accommodations provided at no additional cost.'
        },
        {
          title: '8. Ongoing Updates',
          content: 'We conduct periodic accessibility audits, update system according to latest accessibility guidelines, and collaborate with organizations promoting accessibility. This accessibility statement is updated regularly to reflect current accessibility status.'
        },
        {
          title: '9. Accessibility Coordinator',
          content: 'Our accessibility coordinator: Name: David Cohen, Email: david@safenet.co.il, Phone: 03-1234567 (extension 3). Coordinator available Sun-Thu 9:00-17:00 for any accessibility-related questions or requests.'
        }
      ]
    }
  };
}
