//import './assets/main.css'//vuetifyとの競合が起こる??から消している。

import { createApp } from 'vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)

const vuetify = createVuetify({
    components,
    directives,
  })

app.use(vuetify).mount('#app')
