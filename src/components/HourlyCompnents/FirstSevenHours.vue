<template>
  <div>
    <v-layout class="progress">
      <v-flex class="tet-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"
        ></v-progress-circular>
      </v-flex>
    </v-layout>

    <div
      v-for="(hour, index) in hourlyForecast.hourly.slice(0, 7)"
      :key="index"
    >
      <v-card class="forecast-display">
        <v-card-title>
          {{ convertTime(hour.dt) }}
          <v-spacer></v-spacer>
          {{ convertKelvinToFahrenheit(hour.temp) }}&#176; F /
          {{ convertKelvinToCelcius(hour.temp) }}&#176; C
        </v-card-title>

        <v-card-subtitle>
          Feels like: {{ convertKelvinToFahrenheit(hour.feels_like) }}&#176; F /
          {{ convertKelvinToCelcius(hour.feels_like) }}&#176; C</v-card-subtitle
        >

        <v-card-text>
          <!-- <v-img
            alt="weather-icon"
            height="200"
            width="200"
            src="http://openweathermap.org/img/wn/" + {{hour.weather[0].icon} }+ "@2x.png"
          ></v-img> -->

          {{ hour.weather[0].description }}
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "FirstSevenHours",

  props: ["hourlyForecast"],

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    convertTime(value) {
      return moment.unix(value).format("hh:mm A");
    },

    convertKelvinToFahrenheit(value) {
      return Math.round((parseFloat(value) - 273.15) * 1.8 + 32);
    },

    convertKelvinToCelcius(value) {
      return Math.round(parseFloat(value) - 273.15);
    },
  },
};
</script>

<style scoped>
.forecast-display {
  width: 75%;
  margin: 1% auto;
}

.progress {
  width: 55%;
  margin: auto;
}
</style>
