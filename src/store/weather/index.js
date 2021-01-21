import axios from "axios";
import APIKey from "../../APIKey";

export default {
  state: {
    todaysForecast: null,
  },

  mutations: {
    SET_FORECAST(state, payload) {
      state.todaysForecast = payload;
    },
  },

  actions: {
    getForecast({ commit }) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          //const APIKey = APIKey;
          let QUERYURL =
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
            lat +
            "&lon=" +
            long +
            "&APPID=" +
            APIKey;

          axios
            .get(QUERYURL)
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            });
        },
        (error) => {
          console.log(error.message);
        }
      );

      let forecast = console.log("hello");

      commit("SET_FORECAST", forecast);
    },
  },

  getters: {
    todaysForecast(state) {
      return state.todaysForecast;
    },
  },
};
