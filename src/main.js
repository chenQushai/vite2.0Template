import {createApp} from 'vue'
import router from './router'
import store from "./vuex";
import ElementPlus from 'element-plus';


import 'element-plus/lib/theme-chalk/index.css';
import './api/axios'
import loadComponents from '@vue-components'
import App from './App.vue'

const app = createApp(App);
loadComponents(app);
app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount('#app');
