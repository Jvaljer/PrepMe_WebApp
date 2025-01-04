import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./views2/HomePage2.vue";
import SportPage from "./views2/SportPage2.vue";
import StretchPage from "./views2/StretchPage2.vue";
import LoadingPage from "./views2/LoadingPage2.vue";
import GymloadPage from "./views2/GymloadPage.vue";
import FinishedPage from "./views2/FinishedPage2.vue";

// Possible Routes
const routes = [
    { path: '/', component: HomePage},
    { path: '/sports2', component: SportPage},
    { path: '/gymload', component: GymloadPage},
    { path: '/loading2', component: LoadingPage},
    { path: '/stretch2', component: StretchPage},
    { path: '/finished2', component: FinishedPage}
]

// Router Instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;