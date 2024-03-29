import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'spectre.css/dist/spectre.css'
import 'spectre.css/dist/spectre-icons.min.css'


createApp(App).use(store).use(router).mount('#app')
