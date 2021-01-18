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
      let lat = getters.lat;
      let long = getters.long;
      console.log(lat);
      console.log(long);
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
