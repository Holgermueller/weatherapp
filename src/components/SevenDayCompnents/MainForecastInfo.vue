<template>
  <div>
    <div>
      <v-container>
        <v-row>
          <v-col class="test-left">
            <h3>
              {{ convertTimeToDayOfWeek(time) }}
            </h3>
          </v-col>
          <v-col class="text-right">
            <h3>
              High: {{ convertKelvinToFahrenheit(maxTemp) }}&#176; F /
              {{ convertKelvinToCelcius(maxTemp) }}&#176; C
            </h3>

            <h5>
              Low: {{ convertKelvinToFahrenheit(minTemp) }}&#176; F /
              {{ convertKelvinToCelcius(minTemp) }}&#176; C
            </h5>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-img
      class="forecast-icon"
      alt="image"
      width="150"
      height="150"
      :src="'http://openweathermap.org/img/wn/' + icon + '@2x.png'"
    ></v-img>

    <h5 class="text-center">Description: {{ description }}</h5>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "MainForecastInfo",

  props: {
    time: {
      type: Number,
      required: true,
    },

    maxTemp: {
      type: Number,
      required: true,
    },

    minTemp: {
      type: Number,
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },

  methods: {
    convertTimeToDayOfWeek(value) {
      return moment.unix(value).format("ddd Do MMMM YYYY");
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
.forecast-icon {
  margin: auto;
}
</style>
