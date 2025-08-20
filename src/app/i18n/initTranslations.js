// app/i18n/initTranslations.js
import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import i18nextConfig from '../../../next-i18next.config';

export async function initTranslations(locale, namespaces = ['common']) {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend((lng, ns, callback) => {
        // تحميل ملفات JSON من public/locales
        import(`../../../public/locales/${lng}/${ns}.json`)
          .then((resources) => callback(null, resources))
          .catch((err) => callback(err, null));
      })
    )
    .init({
      lng: locale,
      fallbackLng: i18nextConfig.i18n.defaultLocale,
      supportedLngs: i18nextConfig.i18n.locales,
      ns: namespaces,
      defaultNS: 'common',
      interpolation: { escapeValue: false },
    });

  // استخراج الموارد الحالية لتغذية العميل
  const resources = {};
  namespaces.forEach((ns) => {
    resources[ns] = i18nInstance.getResourceBundle(locale, ns);
  });

  return { i18n: i18nInstance, resources };
}
