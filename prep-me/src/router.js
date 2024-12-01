import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./views/HomePage.vue";
import SportPage from "./views/SportPage.vue";
import StretchPage from "./views/StretchPage.vue";
import LoadingPage from "./views/LoadingPage.vue";
import FinishedPage from "./views/FinishedPage.vue";

// Possible Routes
const routes = [
    { path: '/', component: HomePage},
    { path: '/sports', component: SportPage},
    { path: '/loading', component: LoadingPage},
    { path: '/stretch', component: StretchPage},
    { path: '/finished', component: FinishedPage}
]

// Router Instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;