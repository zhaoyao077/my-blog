import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/theme-chalk/index.css';
import qs from 'qs'
import VueAxios from 'vue-axios'
// import 'element-plus/lib/theme-chalk/index.css'
const app = createApp(App);
createApp(App).use(VueAxios,axios).use(ElementPlus).use(store).use(router).mount('#app')
app.config.globalProperties.$axios = axios
app.config.globalProperties.$qs=qs
