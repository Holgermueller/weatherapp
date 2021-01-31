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
    getFiveDayForecast({ commit }) {
      commit("SET_LOADING", true);

      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          let QUERYURL =
            "https://api.openweathermap.org/data/2.5/forecast?lat=" +
            lat +
            "&lon=" +
            long +
            "&APPID=" +
            APIKey;

          axios
            .get(QUERYURL)
            .then((response) => {
              let forecast = response.data;
              console.log(forecast);
              commit("SET_FIVE_DAY_FORECAST", forecast);
              commit("SET_LOADING", false);
            })
            .catch((err) => {
              console.log(err);
            });
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
  },

  getters: {
    fiveDayForecast(state) {
      return state.fiveDayForecast;
    },
  },
};
