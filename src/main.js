//import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import BootstrapVue3 from 'bootstrap-vue-3'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {useUserStore} from "@/stores/user";

const app = createApp(App)

app.use(createPinia())
useUserStore().initializeAuth();

app.use(router)
app.use(BootstrapVue3)

app.mount('#app')
