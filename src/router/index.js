//import vue router
import { createRouter, createWebHistory } from "vue-router";

//define a routes
const routes = [
    {
        path: "/",
        name: "home",
        component: () =>
            import(/* webpackChunkName: "home" */ "@/components/Index.vue"),
    },
    // {
    //     path: "/posts",
    //     name: "posts.index",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "post.index" */ "@/components/posts/Index.vue"
    //         ),
    // },
    // {
    //     path: "/posts/create",
    //     name: "posts.create",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "post.create" */ "@/components/posts/Create.vue"
    //         ),
    // },
    // {
    //     path: "/posts/edit/:id",
    //     name: "posts.edit",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "post.edit" */ "@/components/posts/Edit.vue"
    //         ),
    // },
    // {
    //     path: "/testing",
    //     name: "testing.index",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "post.edit" */ "@/components/testing/Index.vue"
    //         ),
    // },
];

//create router
const router = createRouter({
    history: createWebHistory(),
    routes, // config routes
});

export default router;
