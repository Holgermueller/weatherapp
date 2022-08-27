<template>
  <v-app>
    <v-app-bar app elevation="0">
      <v-spacer></v-spacer>

      <AboutModal />
    </v-app-bar>

    <v-main class="main-background" :class="isNight()">
      <LoadingCard v-if="loading" />

      <CurrentWeatherDisplay v-else :currentWeather="currentWeather" />
    </v-main>
    <v-footer>
      <h5>
        &copy; 2022 Holger Mueller
      </h5>
      <v-spacer></v-spacer>
      <h5>
        <a href="#">
          <v-icon>
            mdi-github
          </v-icon>
        </a>
      </h5>
      <h5>
        <a href="#">
          <v-icon>
            mdi-stack-overflow
          </v-icon>
        </a>
      </h5>
      <h5>
        <a href="#">
          <v-icon>
            mdi-linkedin
          </v-icon>
        </a>
      </h5>
    </v-footer>
  </v-app>
</template>

<script>
import moment from "moment";
import AboutModal from "./components/AboutModal.vue";
import LoadingCard from "./components/LoadingCard.vue";
import CurrentWeatherDisplay from "./components/CurrentWeather.vue";

export default {
  name: "App",

  components: {
    AboutModal,
    LoadingCard,
    CurrentWeatherDisplay,
  },

  created() {
    this.$store.dispatch("getWeather").then(() => {
      console.log("Forecast fetched!");
    });
  },

  computed: {
    currentWeather() {
      return this.$store.getters.currentWeather;
    },

    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    isNight() {
      const now = moment().format("HH:mm");
      const sunrise = moment.unix(this.currentWeather.sunrise).format("HH:mm");
      const sunset = moment.unix(this.currentWeather.sunrise).format("HH:mm");

      if (now < sunset && now > sunrise) {
        return this.getNightBackgroundImage();
      } else {
        return this.getDayBackgroundImage();
      }
    },

    getDayBackgroundImage() {
      console.log("Day");

      if (this.currentWeather.weather === "Clear") {
        return "clear-background";
      } else {
        return "cloudy-background";
      }
    },

    getNightBackgroundImage() {
      console.log("night");

      if (this.currentWeather.weather === "Clear") {
        return "night-sky";
      } else {
        return "cloudy-night";
      }
    },
  },
};
</script>

<style scoped>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background: transparent;
}
/* Image by Pixabay via Pexels.com */
.cloudy-background {
  background-image: url("./assets/cloudy.png");
}
/*Image by Bri Schneiter via Pexels*/
.clear-background {
  background-image: url("./assets/clearsky.png");
}
/* Image by Pixabay via Pexels.com */
.night-sky {
  background-image: url("./assets/nightsky.png");
}
/* Image by Pixabay via Pexels.com */
.cloudy-night {
  background-image: url("./assets/cloudynight.png");
}

a {
  text-decoration: none;
}
</style>
