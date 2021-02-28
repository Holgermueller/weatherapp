<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col>
          <h5>Feels like:</h5>
          <h5>
            {{ convertKelvinToFahrenheit(feelsLike) }}&#176; F /
            {{ convertKelvinToCelcius(feelsLike) }}&#176; C
          </h5>
        </v-col>
        <v-col>
          <h5>Humidity:</h5>
          <h5>{{ humidity }}%</h5>
        </v-col>
        <v-col
          ><h5>Precipitation:</h5>
          <h5>{{ calcPrecip(pop) }}%</h5></v-col
        >
        <v-col
          ><h5>UV Index:</h5>
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
