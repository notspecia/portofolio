import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { i18n } from './i18n'; // import i18n configuration languages
import App from './App.vue';


// import of bootstrap styles and scripts, icons
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import scss custom main file 
import "@/styles/main.scss";


const app = createApp(App)
const pinia = createPinia()

app
    .use(pinia)
    .use(i18n)
    .mount('#app');