export default {
  state: {
    lat: null,
    long: null,
  },

  mutations: {},

  actions: {
    getLocation({ commit, getters }) {
      commit("SET_LOADING", true);

      console.log(getters.weather.todaysForecast.lon);
    },
  },

  getters: {},
};
