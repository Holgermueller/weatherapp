<template>
  <div>
    <v-card>
      <v-card-title>
        <h1>{{ todaysForecast.name }}, {{ todaysForecast.sys.country }}</h1>
        <v-spacer></v-spacer>
        <h1>{{ convertKelvinToCelcius(todaysForecast.main.temp) }}&#176; C</h1>
      </v-card-title>

      <v-card-subtitle>
        <h4>Description: {{ todaysForecast.weather[0].description }}</h4>
      </v-card-subtitle>

      <v-card-text>
        <h3>
          Feels like:
          {{ convertKelvinToCelcius(todaysForecast.main.feels_like) }}&#176; C
        </h3>
        <h3>
          High:
          {{ convertKelvinToCelcius(todaysForecast.main.temp_max) }}&#176; C
        </h3>
        <h3>
          Low:
          {{ convertKelvinToCelcius(todaysForecast.main.temp_min) }}&#176; C
        </h3>

        <p>Humidity: {{ todaysForecast.main.humidity }}%</p>

        <h5>
          Pressure:
          {{ convertPressureToMetric(todaysForecast.main.pressure) }} cm
        </h5>

        <h5>
          Visibility:
          {{ convertVisibilityToMetric(todaysForecast.visibility) }} km
        </h5>

        <h5>
          Clouds:
          {{ todaysForecast.clouds.all }}%
        </h5>

        <h5>
          Wind:
          {{ todaysForecast.wind.deg }}
          {{ todaysForecast.wind.speed }}m/s
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
  name: "CelciusForecast",

  props: ["todaysForecast"],

  data() {
    return {};
  },

  methods: {
    timestampToDate(timestamp) {
      let date = new Date(timestamp * 1000);
      return date.toLocaleTimeString();
    },

    convertKelvinToCelcius(value) {
      return Math.round(parseFloat(value) - 273.15);
    },

    convertVisibilityToMetric(value) {
      return Math.round(value / 1000);
    },

    convertPressureToMetric(value) {
      return Math.round((value * 0.02953) / 0.3937);
    },
  },
};
</script>

<style scoped></style>
