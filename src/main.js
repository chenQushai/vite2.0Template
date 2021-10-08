import {createApp} from 'vue'
import router from './router'
import store from "./store";
import ElementPlus from 'element-plus';


import 'element-plus/lib/theme-chalk/index.css';
import './api/axios'
import loadComponents from './components/index'
import App from './App.vue'

const app = createApp(App);
app.use(loadComponents)
app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount('#app');
