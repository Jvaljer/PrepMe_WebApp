import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./views/HomePage.vue";
import SportPage from "./views/SportPage.vue";
import CountdownPage from "./views/CountdownPage.vue";
import StretchPage from "./views/StretchPage.vue";

// Possible Routes
const routes = [
    { path: '/', component: HomePage},
    { path: '/sports', component: SportPage},
    { path: '/countdown', component: CountdownPage},
    { path: '/stretch', component: StretchPage}
]

// Router Instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;