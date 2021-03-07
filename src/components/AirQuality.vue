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
        <div class="pollutant-display">
          <h3 class="pollutant-data">
            Carbon Monoxide: {{ airQuality.list[0].components.co }}
          </h3>
        </div>

        <div class="pollutant-display">
          <h3 class="pollutant-data">
            Nitrogen Monoxide: {{ airQuality.list[0].components.no }}
          </h3>
        </div>

        <div class="pollutant-display">
          <h3 class="pollutant-data">
            Nitrogen Dioxide: {{ airQuality.list[0].components["no2"] }}
          </h3>
        </div>

        <div class="pollutant-display">
          <h3 class="pollutant-data">
            Ozone: {{ airQuality.list[0].components["o3"] }}
          </h3>
        </div>

        <div class="pollutant-display">
          <h3 class="pollutant-data">
            Sulpher Dioxide: {{ airQuality.list[0].components["so2"] }}
          </h3>
        </div>

        <div class="pollutant-display">
          <h3 class="pollutant-data">
            Fine particles matter: {{ airQuality.list[0].components["pm2_5"] }}
          </h3>
        </div>

        <div class="pollutant-display">
          <h3 class="pollutant-data">
            Coarse particulates matter
            {{ airQuality.list[0].components["pm10"] }}
          </h3>
        </div>

        <div class="pollutant-display">
          <h3 class="pollutant-data">
            Ammonia: {{ airQuality.list[0].components["nh3"] }}
          </h3>
        </div>
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
    this.$store.dispatch("getLocation");
  },

  computed: {
    airQuality() {
      return this.$store.getters.airQuality;
    },

    getLocation() {
      return this.$store.getters.location;
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

.pollutant-display {
  margin: 8px auto;
  background-color: chartreuse;
  text-align: center;
  border-radius: 15px;
}

.pollutant-data {
  padding: 4px;
}
</style>
