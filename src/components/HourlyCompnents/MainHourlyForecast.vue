<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="text-left">
          <h3>
            {{ convertTime(time) }}
          </h3>
        </v-col>
        <v-col class="text-right">
          <h3 class="text-right">
            <v-icon>mdi-thermometer</v-icon>
            {{ convertKelvinToFahrenheit(temp) }}&#176; F /
            {{ convertKelvinToCelcius(temp) }}&#176; C
          </h3>
        </v-col>
      </v-row>
    </v-container>

    <div class="icon-background">
      <v-img
        class="forecast-icon"
        alt="image"
        width="100"
        height="100"
        :src="
          'http://openweathermap.org/img/wn/' + mainForecast.icon + '@2x.png'
        "
      ></v-img>
    </div>

    <h5 class="description">
      {{ mainForecast.description }}
    </h5>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "MainHourlyForecastDisplay",

  props: {
    mainForecast: {
      type: Object,
      required: true,
    },

    time: {
      type: Number,
      required: true,
    },

    temp: {
      type: Number,
      required: true,
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
.icon-background {
  background-color: #00ebff;
  margin-bottom: 12px;
  border-radius: 15px;
}

.forecast-icon {
  margin: auto;
}

.description {
  text-align: center;
}
</style>
