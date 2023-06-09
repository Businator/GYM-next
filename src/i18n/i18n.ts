"use client";

import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import enHeader from "../UI/header/assets/locales/en/translation.json";
import ruHeader from "../UI/header/assets/locales/ru/translation.json";
import enFooter from "../UI/footer/assets/locales/en/translation.json";
import ruFooter from "../UI/footer/assets/locales/ru/translation.json";
import enMain from "../pages/main/assets/locales/en/translation.json";
import ruMain from "../pages/main/assets/locales/ru/translation.json";
import enContacts from "../pages/contacts/assets/locales/en/translation.json";
import ruContacts from "../pages/contacts/assets/locales/ru/translation.json";

const language = localStorage.getItem("lang") || "en";
i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .init({
    lng: language,
    fallbackLng: "en",
    resources: {
      en: {
        header: enHeader,
        footer: enFooter,
        main: enMain,
        contacts: enContacts,
      },
      ru: {
        header: ruHeader,
        footer: ruFooter,
        main: ruMain,
        contacts: ruContacts,
      },
    },
  });
