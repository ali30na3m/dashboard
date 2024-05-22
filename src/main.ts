import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router/index'
import { createI18n } from 'vue-i18n'
import translateDashboard from './locale/locales'

const i18n = createI18n({
  locale: localStorage.getItem('language') || 'en',
  messages: translateDashboard,
})

const theme = localStorage.getItem('theme') || 'light';
document.documentElement.classList.add(theme);

const app = createApp(App)

app.use(router)
app.use(Antd)
app.use(i18n)
app.mount('#app')
