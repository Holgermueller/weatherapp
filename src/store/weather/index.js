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
