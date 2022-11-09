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
        path: "/juz/",
        name: "juz",
        component: () =>
            import(/* webpackChunkName: "juz" */ "@/pages/Juz/Index.vue"),
    },
    {
        path: "/surah/:id",
        name: "surah",
        component: () =>
            import(
                /* webpackChunkName: "surah" */ "@/pages/DetailSurah/DetailSurahInfo.vue"
            ),
    },
    {
        path: "/tafsir/:id",
        name: "tafsir",
        component: () =>
            import(
                /* webpackChunkName: "tafsir" */ "@/pages/Tafsir/DetailTafsirInfo.vue"
            ),
    },
];

//create router
const router = createRouter({
    history: createWebHistory(),
    routes, // config routes
    scrollBehavior() {
        // always scroll to top
        return { top: 0 };
    },
});

export default router;
