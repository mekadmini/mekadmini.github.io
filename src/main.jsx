import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "@fontsource/outfit";
import "@fontsource/roboto";
import {I18nextProvider} from 'react-i18next';
import i18n from 'i18next';
import translationEN from '../locales/en.json';
import translationDE from '../locales/de.json';

i18n.init({
    resources: {
        en: {
            translation: translationEN,
        },
        de: {
            translation: translationDE,
        },
    },
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
});


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>,
)
