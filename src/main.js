import {createApp} from 'vue'
import router from './router'
import App from './App.vue'
import {mapComponent} from './components/registerComponent'
import store from "./vuex";

const app = createApp(App);
mapComponent(app);
app.use(router);
app.use(store)
app.mount('#app');
