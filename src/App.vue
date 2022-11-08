<template>
    <div>
        <navbar-vue />
        <ScrollToTopVue />

        <!-- render vue router -->
        <!-- <keep-alive> -->
        <router-view :key="$route.fullPath"></router-view>
        <!-- </keep-alive> -->
    </div>
</template>

<script>
import NavbarVue from './components/Navbar.vue'
import ScrollToTopVue from './components/ScrollToTop.vue';

export default {
    name: 'App',
    components: {
        NavbarVue,
        ScrollToTopVue,
    },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

* {
    font-family: 'Quicksand', sans-serif;
}

body {
    background-color: lightgray !important;
}

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    border-radius: 5px;
    box-shadow: inset 0 0 10px rgb(0, 0, 0);
}

::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #198754;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #005f33;
}
</style>