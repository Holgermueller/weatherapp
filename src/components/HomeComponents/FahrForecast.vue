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
        <h3>
          Feels like:
          {{ convertKelvinToFahrenheit(todaysForecast.main.feels_like) }}&#176;
          F / {{ convertKelvinToCelcius(todaysForecast.main.feels_like) }}&#176;
          C
        </h3>
        <h3>
          High:
          {{ convertKelvinToFahrenheit(todaysForecast.main.temp_max) }}&#176; F
          / {{ convertKelvinToCelcius(todaysForecast.main.temp_max) }}&#176; C
        </h3>
        <h3>
          Low:
          {{ convertKelvinToFahrenheit(todaysForecast.main.temp_min) }}&#176; F
          / {{ convertKelvinToCelcius(todaysForecast.main.temp_min) }}&#176; C
        </h3>
        <p>
          <v-icon left>mdi-weather-sunset-up</v-icon>
          Sunrise: {{ timestampToDate(todaysForecast.sys.sunrise) }}
        </p>
        <p>
          <v-icon left>mdi-weather-sunset-down</v-icon>Sunset:
          {{ timestampToDate(todaysForecast.sys.sunset) }}
        </p>

        <h5>
          Pressure: {{ convertPressure(todaysForecast.main.pressure) }} inches
        </h5>

        <h5>
          Visibility: {{ convertVisibility(todaysForecast.visibility) }} miles
        </h5>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FahrenheitForecast",

  data() {
    return {};
  },

  beforeCreate() {
    this.$store.dispatch("getForecast");
  },

  computed: {
    todaysForecast() {
      return this.$store.state.weather.todaysForecast;
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

    convertKelvinToCelcius(value) {
      return Math.round(parseFloat(value) - 273.15);
    },

    convertVisibility(value) {
      return Math.round(value * 0.000621371192);
    },

    convertPressure(value) {
      return Math.round(value * 0.02953);
    },
  },
};
</script>

<style scoped></style>
