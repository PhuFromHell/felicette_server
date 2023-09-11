import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HomeViewVue from './views/HomeView.vue'


const app = createApp(HomeViewVue)

app.use(router)

app.mount('#app')
