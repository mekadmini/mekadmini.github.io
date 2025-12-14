import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "@fontsource/outfit";
import "@fontsource/roboto";
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Import this
import translationEN from '../locales/en.json';
import translationDE from '../locales/de.json';

i18n
    .use(LanguageDetector) // Initialize the detector
    .init({
    resources: {
        en: {
            translation: translationEN,
        },
        de: {
            translation: translationDE,
        },
    },
        fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie'],
        }
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>,
)