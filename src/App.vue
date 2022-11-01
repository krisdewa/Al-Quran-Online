<template>
    <div>
        <navbar-vue />

        <!-- render vue router -->
        <!-- <keep-alive> -->
        <router-view :key="$route.fullPath"></router-view>
        <!-- </keep-alive> -->
    </div>
</template>

<script>
import NavbarVue from './components/Navbar.vue'

export default {
    name: 'App',
    components: {
        NavbarVue,
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
</style>