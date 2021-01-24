<template>
  <div>
    <v-card class="forecast-display">
      <v-card-title>
        <h1>{{ todaysForecast.name }}, {{ todaysForecast.sys.country }}</h1>
        <v-spacer></v-spacer>
        <h1>
          {{ convertKelvinToFahrenheit(todaysForecast.main.temp) }}&#176; F /
          {{ convertKelvinToCelcius(todaysForecast.main.temp) }}&#176; C
        </h1>
      </v-card-title>

      <v-card-subtitle>
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
      </v-card-subtitle>

      <v-card-text>
        <p>Sunrise: {{ timestampToDate(todaysForecast.sys.sunrise) }}</p>
        <p>Sunset: {{ timestampToDate(todaysForecast.sys.sunset) }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Forecast",

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
      let kelvin = parseFloat(value);
      return Math.round((kelvin - 273.15) * 1.8 + 32);
    },

    convertKelvinToCelcius(value) {
      let kelvin = parseFloat(value);
      return Math.round(kelvin - 273.15);
    },
  },
};
</script>

<style scoped>
.forecast-display {
  width: 75%;
  margin: auto;
}
</style>
