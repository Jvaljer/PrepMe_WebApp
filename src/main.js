import { createApp } from 'vue'
// import App from './App.vue' //this is the script that launches the V1 of the app
import App from './App2.vue';
// import router from './router'; //this is the router for V1
import router from './router2';

const app = createApp(App);

app.use(router);

app.mount('#app');
