import axios from "axios";
import APIKey from "../../APIKey";

export default {
  state: {
    airQuality: {},
  },

  mutations: {
    SET_AIR_QUALITY(state, payload) {
      state.airQuality = payload;
    },
  },

  actions: {
    getAirQuality({ commit }) {
      commit("SET_LOADING", true);

      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let QUERYURL =
          "https://api.openweathermap.org/data/2.5/air_pollution?lat=" +
          lat +
          "&lon=" +
          long +
          "&exclude=minutely" +
          "&APPID=" +
          APIKey;

        axios
          .get(QUERYURL)
          .then((response) => {
            let airQuality = response.data;

            commit("SET_AIR_QUALITY", airQuality);
            commit("SET_LOADING", false);
          })
          .catch((err) => {
            console.log(err);
            commit("SET_LOADING", true);
          });
      });
    },
  },

  getters: {
    airQuality(state) {
      return state.airQuality;
    },
  },
};
