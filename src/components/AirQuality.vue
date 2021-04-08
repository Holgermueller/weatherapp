<template>
  <div>
    <v-card class="air-quality-card">
      <v-card-title>
        Air Quality

        <v-spacer></v-spacer>

        {{ getLocation[0].name }}, {{ getLocation[0].state }}
      </v-card-title>

      <v-card-subtitle>
        As of: {{ formatTime(airQuality.list[0].dt) }}
      </v-card-subtitle>

      <v-card-text>
        <CurrentAQComponentsDisplay
          :CurrentAQComponents="airQuality.list[0].components"
        />
      </v-card-text>
    </v-card>

    <AirQualityForecastDisplay
      :airQualityForecast="airQualityForecast.list || []"
    />
  </div>
</template>

<script>
import moment from "moment";
import CurrentAQComponentsDisplay from "./AirQualityComponents/CurrentAQComponents";
import AirQualityForecastDisplay from "./AirQualityComponents/AirQualityForecast";

export default {
  name: "AirQualityPage",

  components: {
    CurrentAQComponentsDisplay,
    AirQualityForecastDisplay,
  },

  beforeCreate() {
    this.$store.dispatch("getAirQuality");
    this.$store.dispatch("getLocation");
    this.$store.dispatch("getAirQualityForecast");
  },

  computed: {
    airQuality() {
      return this.$store.getters.airQuality;
    },

    getLocation() {
      return this.$store.getters.location;
    },

    airQualityForecast() {
      return this.$store.getters.airQualityForecast;
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
