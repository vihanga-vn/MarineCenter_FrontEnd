import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en/translation.json';
import siTranslation from './si/translation.json';
import taTranslation from './ta/translation.json';

const resources = {
  en: { translation: enTranslation },
  si: { translation: siTranslation },
  ta: { translation: taTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
