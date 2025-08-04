<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { IonicVue } from '@ionic/vue'

import '@ionic/vue/css/core.css'
import './theme/variables.css'

const app = createApp(App)

app.use(IonicVue).use(router)

router.isReady().then(() => {
    app.mount('#app')
})


=======
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { IonicVue } from '@ionic/vue'

import '@ionic/vue/css/core.css'
import './theme/variables.css'

const app = createApp(App)
app.use(IonicVue)
app.use(router)
app.mount('#app')
>>>>>>> 4894ff1 (добавил верстку экрана входа)
