import i18n from 'i18next';
import translationFA from './fa-IR.json';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'fa',
  lng: 'fa',
  resources: {
    fa: {translation: translationFA},
  },
});

export default i18n;
