<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col
          ><h5><v-icon>mdi-weather-sunset-up</v-icon>Morning:</h5>
          <h5>
            {{ convertKelvinToFahrenheit(temps.morn) }}&#176; F /
            {{ convertKelvinToCelcius(temps.morn) }}&#176; C
          </h5></v-col
        >
        <v-col>
          <h5>
            <v-icon>mdi-weather-sunny</v-icon>
            Day:
          </h5>
          <h5>
            {{ convertKelvinToFahrenheit(temps.day) }}&#176; F /
            {{ convertKelvinToCelcius(temps.day) }}&#176; C
          </h5></v-col
        >
        <v-col>
          <h5>
            <v-icon>mdi-weather-sunset-down</v-icon>
            Evening:
          </h5>
          <h5>
            {{ convertKelvinToFahrenheit(temps.eve) }}&#176; F /
            {{ convertKelvinToCelcius(temps.eve) }}&#176; C
          </h5></v-col
        >
        <v-col>
          <h5>
            <v-icon>mdi-moon-waning-crescent</v-icon>
            Night:
          </h5>
          <h5>
            {{ convertKelvinToFahrenheit(temps.night) }}&#176; F /
            {{ convertKelvinToCelcius(temps.night) }}&#176; C
          </h5></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TempsThroughtoutDayDisplay",

  props: {
    temps: {
      type: Object,
      required: true,
    },
  },

  methods: {
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
.col {
  text-align: center;
}
</style>
