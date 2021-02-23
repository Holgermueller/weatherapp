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

    <v-expansion-panels class="forecast-display" focusable inset>
      <v-expansion-panel
        v-for="(hour, index) in hourlyForecast.slice(1, 48)"
        :key="index"
      >
        <v-expansion-panel-header>
          {{ convertTime(hour.dt) }}
          <v-spacer></v-spacer>

          <h3 class="text-left">
            {{ hour.weather[0].description }}
          </h3>

          <v-spacer></v-spacer>

          <h3 class="text-right">
            {{ convertKelvinToFahrenheit(hour.temp) }}&#176; F /
            {{ convertKelvinToCelcius(hour.temp) }}&#176; C
          </h3>

          <v-spacer></v-spacer>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          Feels like: {{ convertKelvinToFahrenheit(hour.feels_like) }}&#176; F /
          {{ convertKelvinToCelcius(hour.feels_like) }}&#176; C

          <v-img
            class="forecast-icon"
            alt="image"
            width="100"
            height="100"
            :src="
              'http://openweathermap.org/img/wn/' +
                hour.weather[0].icon +
                '@2x.png'
            "
          ></v-img>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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
.forecast-display {
  width: 75%;
  margin: 1% auto 0;
}

.progress {
  width: 55%;
  margin: auto;
}

.forecast-icon {
  margin: auto;
}
</style>
