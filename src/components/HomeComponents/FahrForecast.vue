<template>
  <div>
    <v-card class="forecast-display">
      <v-card-title>
        <h1>{{ todaysForecast.name }}, {{ todaysForecast.sys.country }}</h1>
        <v-spacer></v-spacer>
        <h1>
          {{ convertKelvinToFahrenheit(todaysForecast.main.temp) }}&#176; F
        </h1>
      </v-card-title>

      <v-card-subtitle>
        <h4>Description: {{ todaysForecast.weather[0].description }}</h4>
      </v-card-subtitle>

      <v-card-text>
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
          :style="{
            'background-image':
              'url(https://openweathermap.org/img/w/' +
              todaysForecast.weather[0].icon +
              '@2x .png)',
          }"
        ></div>
        <!-- <v-img
        alt="image"
          :src=""
        ></v-img> -->

        <h3>
          Feels like:
          {{ convertKelvinToFahrenheit(todaysForecast.main.feels_like) }}&#176;
          F
        </h3>
        <h3>
          High:
          {{ convertKelvinToFahrenheit(todaysForecast.main.temp_max) }}&#176; F
        </h3>
        <h3>
          Low:
          {{ convertKelvinToFahrenheit(todaysForecast.main.temp_min) }}&#176; F
        </h3>

        <p>
          <v-icon left>mdi-water</v-icon>
          Humidity: {{ todaysForecast.main.humidity }}%
        </p>

        <h5>
          Pressure:
          {{ convertPressureToInches(todaysForecast.main.pressure) }} inches
        </h5>

        <h5>
          Visibility:
          {{ convertVisibilityToMiles(todaysForecast.visibility) }} miles
        </h5>

        <h5>
          <v-icon left>mdi-weather-cloudy</v-icon>
          Cloudiness:
          {{ todaysForecast.clouds.all }}%
        </h5>

        <h5>
          <v-icon left>mdi-weather-windy</v-icon>
          Wind:
          {{ todaysForecast.wind.deg }}
          {{ convertSpeedToMPH(todaysForecast.wind.speed) }} mph
        </h5>
      </v-card-text>

      <v-card-actions>
        <p>
          <v-icon left>mdi-weather-sunset-up</v-icon>
          Sunrise: {{ timestampToDate(todaysForecast.sys.sunrise) }}
        </p>
        <v-spacer></v-spacer>
        <p>
          Sunset:
          {{ timestampToDate(todaysForecast.sys.sunset) }}
          <v-icon right>mdi-weather-sunset-down</v-icon>
        </p>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FahrenheitForecast",

  props: ["todaysForecast"],

  data() {
    return {};
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    timestampToDate(timestamp) {
      let date = new Date(timestamp * 1000);
      return date.toLocaleTimeString();
    },

    convertKelvinToFahrenheit(value) {
      return Math.round((parseFloat(value) - 273.15) * 1.8 + 32);
    },

    convertVisibilityToMiles(value) {
      return Math.round(value * 0.000621371192);
    },

    convertPressureToInches(value) {
      return Math.round(value * 0.02953);
    },

    convertSpeedToMPH(value) {
      return Math.round(value * 2.24);
    },
  },
};
</script>

<style scoped></style>
