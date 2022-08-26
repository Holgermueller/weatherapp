require("dotenv").config();
import axios from "axios";

export default {
  state: {
    currentWeather: {},
  },

  mutations: {
    SET_WEATHER(state, payload) {
      state.currentWeather = payload;
    },
  },

  actions: {
    async getWeather({ commit }) {
      commit("SET_LOADING", true);

      const API_KEY = process.env.VUE_APP_API_KEY;
      const REQUEST_URL = process.env.VUE_APP_REQUEST_URL;

      await navigator.geolocation.getCurrentPosition(
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
              console.log(response.data);
              let weatherData = {
                location: response.data.name,
                temp: response.data.main.temp,
                feelsLike: response.data.main.feels_like,
                weather: response.data.weather[0].main,
                sunrise: response.data.sys.sunrise,
                sunset: response.data.sys.sunset,
                humidity: response.data.main.humidity,
                pressure: response.data.main.pressure,
                wind: response.data.wind.speed,
                windDirection: response.data.wind.deg,
              };

              commit("SET_WEATHER", weatherData);
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
    currentWeather(state) {
      return state.currentWeather;
    },
  },
};
