import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: {} },
      en: { translation: {} },
      ru: { translation: {} },
      es: { translation: {} },
      ko: { translation: {} },
      tr: { translation: {} },
      zh: { translation: {} },
    },
    lng: "uz",
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
