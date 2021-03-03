import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/index";
import Hourly from "../components/Hourly";
import SevenDay from "../components/SevenDayForecast";
import AirQuality from "../components/AirQuality";
import WeatherAlerts from "../components/WeatherAlerts";
import About from "../components/About";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home, props: true },
    { path: "/hourly", name: "HourlyForecase", component: Hourly, props: true },
    { path: "/sevenDay", name: "SevenDay", component: SevenDay, props: true },
    { path: "/about", name: "About", component: About },
    {
      path: "/weatherAlerts",
      name: "WeatherAlerts",
      component: WeatherAlerts,
      props: true,
    },
    {
      path: "/airQuality",
      name: "AirQuality",
      component: AirQuality,
      props: true,
    },
  ],
});

export default router;
