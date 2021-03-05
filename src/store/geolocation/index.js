import axios from "axios";
import APIKey from "../../APIKey";

export default {
  state: {
    location: [],
  },

  mutations: {
    SET_LOCATION(state, payload) {
      state.location = payload;
    },
  },

  actions: {
    getLocation({ commit }) {
      commit("SET_LOADING", true);

      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let QUERYURL =
          "https://api.openweathermap.org/geo/1.0/reverse?lat=" +
          lat +
          "&lon=" +
          long +
          "&exclude=minutely" +
          "&APPID=" +
          APIKey;

        axios
          .get(QUERYURL)
          .then((response) => {
            let location = response.data;
            commit("SET_LOCATION", location);
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
    location(state) {
      return state.location;
    },
  },
};
