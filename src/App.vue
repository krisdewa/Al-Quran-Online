<template>
  <div>
    <navbar-vue />

    <!-- render vue router -->
    <router-view></router-view>

    <footer-vue />
  </div>
</template>

<script>
import NavbarVue from './components/Navbar.vue'
import FooterVue from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavbarVue,
    FooterVue,
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