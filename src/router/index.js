import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/index";
import Hourly from "../components/Hourly";
import SevenDay from "../components/SevenDayForecast";
import About from "../components/About";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/hourly", name: "HourlyForecase", component: Hourly },
    { path: "/sevenDay", name: "SevenDay", component: SevenDay },
    { path: "/about", name: "About", component: About },
  ],
});

export default router;
