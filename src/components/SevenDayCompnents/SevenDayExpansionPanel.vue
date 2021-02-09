<template>
  <div>
    <v-expansion-panels class="seven-day-display" focusable inset>
      <v-expansion-panel v-for="(day, index) in SevenDayForecast" :key="index">
        <v-expansion-panel-header>
          {{ convertTimeToDayOfWeek(day.dt) }}
          <v-spacer></v-spacer>

          {{ convertKelvinToFahrenheit(day.temp.max) }}&#176; F /
          {{ convertKelvinToCelcius(day.temp.max) }} &#176; C
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <h5>Description: {{ day.weather[0].description }}</h5>

          <div class="sunrise-sunset">
            Sunrise: {{ convertSunriseSunset(day.sunrise) }}
            <v-spacer></v-spacer>
            Sunset: {{ convertSunriseSunset(day.sunset) }}
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "SevenDayExpanstion",

  props: ["SevenDayForecast"],

  methods: {
    convertTimeToDayOfWeek(value) {
      return moment.unix(value).format("ddd Do MMMM YYYY");
    },

    convertSunriseSunset(value) {
      return moment.unix(value).format("LT");
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
.seven-day-display {
  width: 75%;
  margin: 2% auto;
}

.sunrise-sunset {
  bottom: 0;
}
</style>
