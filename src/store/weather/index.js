import axios from "axios";
import APIKey from "../../APIKey";

export default {
  state: {
    todaysForecast: [],
  },

  mutations: {
    SET_FORECAST(state, payload) {
      state.todaysForecast = payload;
    },
  },

  actions: {
    getForecast({ commit }) {
      commit("SET_LOADING", true);

      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          let QUERYURL =
            "https://api.openweathermap.org/data/2.5/onecall?lat=" +
            lat +
            "&lon=" +
            long +
            "&exclude=minutely" +
            "&APPID=" +
            APIKey;

          axios
            .get(QUERYURL)
            .then((response) => {
              let forecast = response.data;
              commit("SET_FORECAST", forecast);
              commit("SET_LOADING", false);
              console.log(forecast);
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
    todaysForecast(state) {
      return state.todaysForecast;
    },
  },
};
