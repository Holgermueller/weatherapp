import axios from "axios";
import APIKey from "../../APIKey";

export default {
  state: {
    fiveDayForecast: [],
  },

  mutations: {
    SET_FIVE_DAY_FORECAST(state, payload) {
      state.fiveDayForecast = payload;
    },
  },

  actions: {
    getFiveDayForecast({ commit }) {},
  },

  getters: {
    fiveDayForecast(state) {
      return state.fiveDayForecast;
    },
  },
};
