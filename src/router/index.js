import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/index";
import FiveDay from "../components/FiveDay";
import About from "../components/About";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/fiveDay", name: "FiveDay", component: FiveDay },
    { path: "/about", name: "About", component: About },
  ],
});

export default router;
