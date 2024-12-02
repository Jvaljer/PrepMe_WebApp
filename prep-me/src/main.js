import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false;
Vue.config.devtools = false; // Disable Vue Devtools

const app = createApp(App);

app.use(router);

app.mount('#app');
