import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import { securedAxiosInstance, plainAxiosInstance } from './backend/axios'

const app = createApp(App)

app.use(router)

app.use(VueAxios, {
    secured: securedAxiosInstance,
    plain: plainAxiosInstance
})

app.mount('#app')
