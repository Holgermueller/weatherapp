import Vue from "vue";
import Vuex from "vuex";

import location from "./location";
import weather from "./weather";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    location,
    weather,
  },
});
