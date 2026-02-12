import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { i18n } from './i18n'; // import i18n configuration languages
import App from './App.vue';


// import scss custom main file + bootstrap styles + icons + js interactions
import '@/styles/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App)
const pinia = createPinia()

app
    .use(pinia)
    .use(i18n)
    .mount('#app');