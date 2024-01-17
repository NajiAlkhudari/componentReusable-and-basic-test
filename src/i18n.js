import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Header": "Header",
        "Article": "Article",
        "This is the content for Article": "This is the content for Article",
        "Home" : "Home",
        "About":"About",
        "Components":"Components",
        "Mohamad Naji Alkhudari" : "Mohamad Naji Alkhudari",

      }
    },
    ar: {
      translation: {
        "Header": "العنوان",
        "Article": "مقالة",
        "This is the content for Article": "هذا هو محتوى المقال",
        "Home": "الرئيسية",
        "About":"حول",
        "Components":"المكونات",
        "Mohamad Naji Alkhudari" : "محمد ناجي الخضري",

      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
