import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './sotre/index'
import './assets/main.scss'
import './assets/base.css'

const app = createApp(App)

app.use(router, store);

app.mount('#app')
