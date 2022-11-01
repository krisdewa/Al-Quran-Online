//import vue router
import { createRouter, createWebHistory } from "vue-router";

//define a routes
const routes = [
    {
        path: "/",
        name: "home",
        component: () =>
            import(/* webpackChunkName: "home" */ "@/pages/Index.vue"),
    },
    {
        path: "/surah/:id",
        name: "surah",
        component: () =>
            import(
                /* webpackChunkName: "home" */ "@/pages/DetailSurah/DetailSurahInfo.vue"
            ),
    },
];

//create router
const router = createRouter({
    history: createWebHistory(),
    routes, // config routes
});

export default router;
