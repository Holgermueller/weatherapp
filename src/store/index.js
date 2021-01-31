import Vue from "vue";
import Vuex from "vuex";

import shared from "./shared";
import weather from "./weather";
import fiveDay from "./FiveDayForecast";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    shared,
    weather,
    fiveDay,
  },
});
