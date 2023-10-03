import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import BtnAdd from "@/components/UI/BtnAdd.vue";

const app = createApp(App)
app.component('BtnAdd', BtnAdd)
app.use(createPinia())
app.use(router)

app.mount('#app')
