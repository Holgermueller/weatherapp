<template>
  <v-app>
    <v-app-bar app color="red" dark>
      <div v-for="link in menuLinks" :key="link.title" link>
        <v-btn :to="link.link" elevation="0">
          <v-icon left>
            {{ link.icon }}
          </v-icon>
          {{ link.title }}
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <NavBarSearchField />
    </v-app-bar>

    <v-main class="main-background" :class="getBackgroundColor()">
      <router-view
        :allForecasts="allForecasts"
        :airQuality="airQuality"
        :location="getLocation"
      ></router-view>
    </v-main>
  </v-app>
</template>

<script>
import moment from "moment";
import NavBarSearchField from "./components/NavComponents/Search";

export default {
  name: "App",

  components: {
    NavBarSearchField,
  },

  data() {
    return {
      menuLinks: [
        {
          icon: "mdi-home",
          title: "Home",
          link: "/",
        },
        {
          icon: "mdi-clock",
          title: "Hourly Forecast",
          link: "/hourly",
        },
        {
          icon: "mdi-view-week-outline",
          title: "7 Day Forecast",
          link: "/sevenDay",
        },
        {
          icon: "mdi-book-open",
          title: "About",
          link: "/about",
        },
      ],
    };
  },

  created() {
    this.$store.dispatch("getForecast").then(() => {
      console.log("Forcast fetched!");
    });
    this.$store.dispatch("getAirQuality");
    this.$store.dispatch("getLocation");
  },

  computed: {
    allForecasts() {
      return this.$store.getters.todaysForecast;
    },

    airQuality() {
      return this.$store.getters.airQuality;
    },

    getLocation() {
      return this.$store.getters.location;
    },
  },

  methods: {
    getBackgroundColor() {
      let now = moment().format("HH:mm");
      let sunrise = moment
        .unix(this.allForecasts.current.sunrise)
        .format("HH:mm");
      let sunset = moment
        .unix(this.allForecasts.current.sunset)
        .format("HH:mm");

      if (now == sunrise) {
        return "dawn-background";
      } else if (now > sunrise && now < sunset) {
        return "day-background";
      } else if (now == sunset) {
        return "sunset-background";
      } else {
        return "night-background";
      }
    },
  },
};
</script>

<style scoped>
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

.error-card {
  width: 75%;
  margin: 7% auto;
}
</style>
