import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationSV from './locales/sv/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  sv: {
    translation: translationSV,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'sv', // Default language
    fallbackLng: 'en', // Fallback language if translation is not available
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
