import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//Импортируем созданный нами роутер
import router from "./utils/router/index.js";

//После создания приложения с помощью use задействуем созданный router
createApp(App).use(router).mount('#app')
