import '@/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'
import axios from "axios";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

// Передача куки с CSRF-токеном
axios.defaults.withCredentials = true;

// Установка заголовка X-Requested-With
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
