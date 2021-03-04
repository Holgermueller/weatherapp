<template>
  <div>
    <v-card class="air-quality-card">
      <v-card-title>
        Air Quality for:
      </v-card-title>

      <v-card-subtitle>
        As of: {{ formatTime(airQuality.list[0].dt) }}
      </v-card-subtitle>

      <v-card-text>
        <h5>Carbon Monoxide: {{ airQuality.list[0].components.co }}</h5>

        <h5>Nitrogen Monoxide: {{ airQuality.list[0].components.no }}</h5>

        <h5>Nitrogen Dioxide: {{ airQuality.list[0].components["no2"] }}</h5>

        <h5>Ozone: {{ airQuality.list[0].components["o3"] }}</h5>

        <h5>Sulpher Dioxide: {{ airQuality.list[0].components["so2"] }}</h5>

        <h5>
          Fine particles matter: {{ airQuality.list[0].components["pm2_5"] }}
        </h5>

        <h5>
          Coarse particulates matter {{ airQuality.list[0].components["pm10"] }}
        </h5>

        <h5>Ammonia: {{ airQuality.list[0].components["nh3"] }}</h5>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "AirQualityPage",

  beforeCreate() {
    this.$store.dispatch("getAirQuality");
  },

  computed: {
    airQuality() {
      return this.$store.getters.airQuality;
    },
  },

  methods: {
    formatTime(value) {
      return moment.unix(value).format("LT");
    },
  },
};
</script>

<style scoped>
.air-quality-card {
  width: 85%;
  margin: 7% auto;
}
</style>
