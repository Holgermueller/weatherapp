<template>
  <div>
    <v-expansion-panels class="seven-day-display" focusable inset>
      <v-expansion-panel v-for="(day, index) in SevenDayForecast" :key="index">
        <v-expansion-panel-header>
          {{ convertTime(day.dt) }}
          <v-spacer></v-spacer>

          {{ convertKelvinToFahrenheit(day.temp.max) }}&#176; F /
          {{ convertKelvinToCelcius(day.temp.max) }} &#176; C
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          Description: {{ day.weather[0].description }}

          <div class="sunrise-sunset">
            Sunrise:
            <v-spacer></v-spacer>
            Sunset:
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
    convertTime(value) {
      return moment.unix(value).format("Do MMMM YYYY");
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
