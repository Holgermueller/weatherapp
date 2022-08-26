<template>
  <v-app>
    <v-app-bar app elevation="0">
      <v-spacer></v-spacer>

      <v-btn @click="determineTimeOfDay">
        Test
      </v-btn>
      <AboutModal />
    </v-app-bar>

    <v-main class="main-background" :class="getBackgroundImage()">
      <CurrentWeatherDisplay :currentWeather="currentWeather" />
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
//import moment from "moment";
import AboutModal from "./components/AboutModal.vue";
import CurrentWeatherDisplay from "./components/CurrentWeather.vue";

export default {
  name: "App",

  components: {
    AboutModal,
    CurrentWeatherDisplay,
  },

  data() {
    return {
      menuLinks: [],
    };
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
  },

  methods: {
    determineTimeOfDay() {
      const sunrise = this.currentWeather.sunrise;
      const sunset = this.currentWeather.sunrise;
      console.log("click");
      console.log(sunrise, sunset);
    },

    getBackgroundImage() {
      if (this.currentWeather.weather === "Clear") {
        return "clear-background";
      } else {
        return "cloudy-background";
      }
    },
  },
};
</script>

<style scoped>
/* Imagesby Pixabay via Pexels.com */
.cloudy-background {
  background-image: url("./assets/cloudy.png");
}
/*Image by Bri Schneiter via Pexels*/
.clear-background {
  background-image: url("./assets/clearsky.png");
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background: transparent;
}

.dawn-background {
  background-image: linear-gradient(#00faff, #ffcd00);
}

.day-background {
  background-color: #00ebff;
}

.sunset-background {
  background-image: linear-gradient(#5f0066, m#ff0500);
}

.night-background {
  background-color: #280066;
}
a {
  text-decoration: none;
}
</style>
