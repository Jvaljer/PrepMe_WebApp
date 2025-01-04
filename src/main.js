import { createApp } from 'vue'
// import App from './App.vue' //this is the script that launches the V1 of the app
import App from './App2.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
