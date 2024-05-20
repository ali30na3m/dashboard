import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from '../router';
import Antd from 'ant-design-vue';
import { createI18n } from 'vue-i18n';
import messages from './locales';

const i18n = createI18n({
    locale: 'en', 
    messages,
  });

const app = createApp(App);
app.use(router);
app.use(i18n)
app.use(Antd);
app.mount('#app');
