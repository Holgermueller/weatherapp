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
      } else if (this.currentWeather.weather === "Thunderstorm") {
        return "thunder-day";
      } else if (this.currentWeather.weather === "Drizzle") {
        return "drizzle";
      } else if (this.currentWeather.weather === "Rain") {
        return "rainy-day";
      } else if (this.currentWeather.weather === "Snow") {
        return "snowy-day";
      } else if (this.currentWeather.weather === "Mist") {
        return "mist";
      } else if (this.currentWeather.weather === "Smoke") {
        return "smoke";
      } else if (this.currentWeather.weather === "Haze") {
        return "haze";
      } else if (this.currentWeather.weather === "Dust") {
        return "dust";
      } else if (this.currentWeather.weather === "Fog") {
        return "fog";
      } else if (this.currentWeather.weather === "Sand") {
        return "sand";
      } else if (this.currentWeather.weather === "Squall") {
        return "squall";
      } else if (this.currentWeather.weather === "Tornado") {
        return "tornado";
      } else if (this.currentWeather.weather === "Ash") {
        return "ash";
      } else {
        return "cloudy-background";
      }
    },

    getNightBackgroundImage() {
      console.log("night");

      if (this.currentWeather.weather === "Clear") {
        return "night-sky";
      } else if (this.currentWeather.weather === "Thunderstorm") {
        return "thunder-night";
      } else if (this.currentWeather.weather === "Drizzle") {
        return "drizzle";
      } else if (this.currentWeather.weather === "Rain") {
        return "rainy-night";
      } else if (this.currentWeather.weather === "Snow") {
        return "snowy-night";
      } else if (this.currentWeather.weather === "Mist") {
        return "mist";
      } else if (this.currentWeather.weather === "Smoke") {
        return "smoke";
      } else if (this.currentWeather.weather === "Haze") {
        return "haze";
      } else if (this.currentWeather.weather === "Dust") {
        return "dust";
      } else if (this.currentWeather.weather === "Fog") {
        return "fog";
      } else if (this.currentWeather.weather === "Sand") {
        return "sand";
      } else if (this.currentWeather.weather === "Squall") {
        return "squall";
      } else if (this.currentWeather.weather === "Tornado") {
        return "tornado";
      } else if (this.currentWeather.weather === "Ash") {
        return "ash";
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
/* Image by Frank Cone via Pexels,com */
.thunder-night {
  background-image: url("./assets/thundernight.png");
}
/* image by john mckenna via Pexels.com */
.thunder-day {
  background-image: url("./assets/thunderday.png");
}
/*Image by Matheus Natan via Pexels.com*/
.drizzle {
  background-image: url("./assets/drizzle.png");
}
/*Image by Pixaby via Pexels.com*/
.rainy-day {
  background-image: url("./assets/rainyday.png");
}
/* Image by Ave Calvar Martinez via Pexels.com */
.rainy-night {
  background-image: url("./assets/rainynight.png");
}
/*Image Simon Berger via Pexels*/
.snowy-day {
  background-image: url("./assets/snowyday.png");
}
/* Image eberhard grossgasteiger via Pexels */
.snowy-night {
  background-image: url("./assets/snowynight.png");
}
/*Karol Wisniewski-Pexels*/
.mist {
  background-image: url("./assets/mist.png");
}
/* Pixabay-Pexels */
.smoke {
  background-image: url("./assets/smoke.png");
}
/* Johannes Plenio-Pexels */
.haze {
  background-image: url("./assets/haze.png");
}
/* Cristiana Bonzanini - Pexels */
.dust {
  background-image: url("./assets/dust.png");
}
/* Pixabay - Pexels */
.fog {
  background-image: url("./assets/fog.png");
}
/* Emiliano Arano - Pexels */
.sand {
  background-image: url("./assets/sand.png");
}
/* Greg via Pexels */
.squall {
  background-image: url("./assets/squall.png");
}
/* Ralph W.Iambrecht - Pexels */
.tornado {
  background-image: url("./assets/tornado.png");
}
/* Pixabay - Pexels */
.ash {
  background-image: url("./assets/ash.png");
}
a {
  text-decoration: none;
}
</style>
