import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { IonicVue } from '@ionic/vue'

import '@ionic/vue/css/core.css'
import './theme/variables.css'
import './theme/main.css' // если есть

const app = createApp(App)
app.use(IonicVue)
app.use(router)
app.mount('#app')

