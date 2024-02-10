import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json"
import tr from "./translations/tr.json"
import de from "./translations/de.json"

const initialLanguage = localStorage.getItem("lang") || navigator.language || 'en'; //Burada varsa kullanicinin daha önceki local dil ayarlari, yoksa browser ayarlari o da yoksa en secenegi gelecek


export const i18nInstance = i18n.use(initReactI18next)

i18nInstance.init({

    resources: {
        en: {
            translation: en
        },
        tr: {
            translation: tr
        },
        de: {
            translation: de
        },
    },
    // lng: "tr",
    // fallbackLng: "en",
    fallbackLng: navigator.language,

    interpolation: {
        escapeValue: false,
    }
})
