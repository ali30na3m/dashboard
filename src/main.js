import { createApp } from 'vue';
import App from './App.vue';
import router from '../router';
import Antd from 'ant-design-vue';
import { createI18n } from 'vue-i18n';
import messages from './locales';

import './assets/tailwind.css';

const i18n = createI18n({
    locale: localStorage.getItem('language') || 'en',
    messages,
});

const theme = localStorage.getItem('theme') || 'light';
document.documentElement.classList.add(theme);

const app = createApp(App);
app.use(router);
app.use(i18n)
app.use(Antd);
app.mount('#app');
