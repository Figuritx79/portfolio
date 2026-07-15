import { createI18n } from 'vue-i18n'
import en from './locales/en.json' // <--- add this
import es from './locales/es.json' // <--- add this
export default createI18n({
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  messages: {
    en,
    es,
  },
  globalInjection: true,
})
