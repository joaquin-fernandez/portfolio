// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traducciones
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
    en: { translation: translationEN },
    es: { translation: translationES },
};

i18n.use(LanguageDetector) // Detecta idioma automáticamente
    .use(initReactI18next) // Conecta con React
    .init({
        resources,
        fallbackLng: 'es', // Idioma por defecto
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'], // orden de detección
            caches: ['localStorage'], // guarda el idioma seleccionado
        },
        interpolation: {
            escapeValue: false, // React ya escapa
        },
    });

export default i18n;
