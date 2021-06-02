import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import store from "./vuex";
import loadComponents from '@vue-components'
import './api/axios'


const app = createApp(App);
loadComponents(app);
app.use(router);
app.use(store);
app.mount('#app');
