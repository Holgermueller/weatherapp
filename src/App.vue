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
    </v-app-bar>

    <v-main>
      <router-view
        :allForecasts="allForecasts"
        :airQuality="airQuality"
        :location="getLocation"
      ></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

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

  beforeCreate() {
    this.$store.dispatch("getForecast");
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
};
</script>
