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
          const APIKey = "";
          let QUERYURL =
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
            lat +
            "&lon=" +
            long +
            "&APPID=" +
            APIKey;

          console.log(QUERYURL);

          console.log(lat);
          console.log(long);
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
