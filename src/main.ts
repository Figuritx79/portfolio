import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/main.css'
import i18n from './i18n'
import I18nManager from './i18n/manger'

const app = createApp(App)

I18nManager.init(i18n)

app.use(i18n)

app.mount('#app')
