import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';


import translationEN from './locales/en/translation.json'
import translationFR from './locales/fr/translation.json'

const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    }
}

i18n
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init({
        resources,
        fallbackLng: 'fr',
    })

export default i18n