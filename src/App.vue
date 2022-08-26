<template>
  <v-app>
    <v-app-bar app elevation="0">
      <v-spacer></v-spacer>

      <v-btn elevation="0" text>
        About
      </v-btn>
    </v-app-bar>

    <v-main class="main-background">
      <CurrentWeatherDisplay />
      <HourlyForecastDisplay />
      <DailyForecastDisplay />
    </v-main>
    <footer>
      &copy; 2022 Holger Mueller
    </footer>
  </v-app>
</template>

<script>
//import moment from "moment";
import CurrentWeatherDisplay from "./components/CurrentWeather.vue";
import HourlyForecastDisplay from "./components/HourlyForecast.vue";
import DailyForecastDisplay from "./components/DailyForecast.vue";

export default {
  name: "App",

  components: {
    CurrentWeatherDisplay,
    HourlyForecastDisplay,
    DailyForecastDisplay,
  },

  data() {
    return {
      menuLinks: [],
    };
  },

  created() {},

  computed: {
    allForecasts() {
      return this.$store.getters.todaysForecast;
    },
  },

  methods: {
    // getBackgroundColor() {
    //   let now = moment().format("HH:mm");
    //   let sunrise = moment
    //     .unix(this.allForecasts.current.sunrise)
    //     .format("HH:mm");
    //   let sunset = moment
    //     .unix(this.allForecasts.current.sunset)
    //     .format("HH:mm");
    //   if (now == sunrise) {
    //     return "dawn-background";
    //   } else if (now > sunrise && now < sunset) {
    //     return "day-background";
    //   } else if (now == sunset) {
    //     return "sunset-background";
    //   } else {
    //     return "night-background";
    //   }
    // },
  },
};
</script>

<style scoped>
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
</style>
