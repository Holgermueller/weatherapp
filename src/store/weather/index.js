require("dotenv").config();
import axios from "axios";

export default {
  state: {
    todaysForecast: {},
  },

  mutations: {
    SET_FORECAST(state, payload) {
      state.todaysForecast = payload;
    },
  },

  actions: {
    getForecast({ commit }) {
      commit("SET_LOADING", true);

      const API_KEY = process.env.VUE_APP_API_KEY;
      const REQUEST_URL = process.env.VUE_APP_REQUEST_URL;

      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;

          let QUERYURL =
            REQUEST_URL +
            "?lat=" +
            lat +
            "&lon=" +
            long +
            "&exclude=minutely" +
            "&APPID=" +
            API_KEY;

          axios
            .get(QUERYURL)
            .then((response) => {
              let forecast = response.data;
              console.log(response.data);
              commit("SET_FORECAST", forecast);
              commit("SET_LOADING", false);
            })
            .catch((err) => {
              console.log(err);
              commit("SET_LOADING", true);
            });
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
  },

  getters: {
    todaysForecast(state) {
      return state.todaysForecast;
    },
  },
};
