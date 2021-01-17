export default {
  state: {
    lat: null,
    long: null,
  },

  mutations: {
    SET_LAT(state, payload) {
      state.lat = payload;
    },

    SET_LONG(state, payload) {
      state.long = payload;
    },
  },

  actions: {
    getLocation({ commit }) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          commit("SET_LAT", lat);
          let long = position.coords.longitude;
          commit("SET_LONG", long);
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
  },

  getters: {
    lat(state) {
      return state.lat;
    },

    long(state) {
      return state.long;
    },
  },
};
