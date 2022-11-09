import { createApp } from "vue";
import App from "./App.vue";

// import booostrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap-icons/font/bootstrap-icons.css";

//import router
import router from "./router";

import './registerServiceWorker'

// create app
const app = createApp(App);

// use vue router
app.use(router);

// mount app
app.mount("#app");
