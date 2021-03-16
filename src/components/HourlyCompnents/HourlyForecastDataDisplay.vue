<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col>
          <h5><v-icon>mdi-thermometer</v-icon>Feels like:</h5>
          <h5>
            {{ convertKelvinToFahrenheit(feelsLike) }}&#176; F /
            {{ convertKelvinToCelcius(feelsLike) }}&#176; C
          </h5>
        </v-col>
        <v-col>
          <h5><v-icon>mdi-water-percent</v-icon>Humidity:</h5>
          <h5>{{ humidity }}%</h5>
        </v-col>
        <v-col
          ><h5><v-icon>mdi-water-percent</v-icon>Precipitation:</h5>
          <h5>{{ calcPrecip(pop) }}%</h5></v-col
        >
        <v-col
          ><h5><v-icon>mdi-weather-sunny</v-icon> UV Index:</h5>
          <h5>
            {{ uvi }}
          </h5></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HourlyForecastDataDisplay",

  props: {
    feelsLike: {
      type: Number,
      required: true,
    },

    humidity: {
      type: Number,
      required: true,
    },

    pop: {
      type: Number,
      required: true,
    },

    uvi: {
      type: Number,
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

    calcPrecip(value) {
      return Math.round(value * 100);
    },
  },
};
</script>

<style scoped>
.col {
  text-align: center;
}
</style>
