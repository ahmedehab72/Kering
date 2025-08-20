// app/i18n/TranslationsProvider.jsx
"use client";

import React, { useRef } from 'react';
import i18next, { createInstance } from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

export default function TranslationsProvider({ children, locale, resources, namespaces = ['common'] }) {
  // حافظ على instance واحد
  const i18nRef = useRef();

  if (!i18nRef.current) {
    const instance = createInstance();
    instance.use(initReactI18next).init({
      lng: locale,
      resources: { [locale]: resources },
      ns: namespaces,
      defaultNS: 'common',
      interpolation: { escapeValue: false },
      fallbackLng: 'en'
    });
    i18nRef.current = instance;
  } else {
    // تحديث اللغة/الموارد عند تغيّرها
    i18nRef.current.changeLanguage(locale);
    i18nRef.current.addResources(locale, 'common', resources['common'] || {});
  }

  return <I18nextProvider i18n={i18nRef.current}>{children}</I18nextProvider>;
}
