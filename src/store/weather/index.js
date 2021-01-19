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
    getForecast({ commit, getters }) {
      const APIKey = "";
      let LAT = getters.lat;
      let LONG = getters.long;
      let QUERYURL =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        LAT +
        "&lon=" +
        LONG +
        "&APPID=" +
        APIKey;

      console.log(QUERYURL);

      console.log(LAT);
      console.log(LONG);

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
