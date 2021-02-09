<template>
  <div>
    <div v-if="hidden1">
      <div v-for="(hour, index) in hourlyForecast.slice(7, 14)" :key="index">
        <v-card class="forecast-display">
          <v-card-title>
            {{ convertTime(hour.dt) }}
            <v-spacer></v-spacer>
            {{ convertKelvinToFahrenheit(hour.temp) }}&#176; F /
            {{ convertKelvinToCelcius(hour.temp) }}&#176; C
          </v-card-title>

          <v-card-subtitle>
            Feels like: {{ convertKelvinToFahrenheit(hour.feels_like) }}&#176; F
            / {{ convertKelvinToCelcius(hour.feels_like) }}&#176;
            C</v-card-subtitle
          >

          <v-card-text>
            <!-- <v-img
            alt="weather-icon"
            height="200"
            width="200"
            src="http://openweathermap.org/img/wn/" + {{hour.weather[0].icon} }+ "@2x.png"
          ></v-img> -->

            {{ hour.weather[0].description }}
          </v-card-text>
        </v-card>
      </div>
    </div>

    <div class="show-more" v-if="hiddenButton1">
      <v-btn class="show-more-btn" block @click.prevent="showMore"
        >Show More</v-btn
      >
    </div>

    <ThirdSevenHours
      v-if="hiddenThirdSevenHours"
      :hourlyForecast="hourlyForecast"
    />
  </div>
</template>

<script>
import moment from "moment";
import ThirdSevenHours from "./ThirdSevenHours";

export default {
  name: "SecondSevenHours",

  components: {
    ThirdSevenHours,
  },

  props: ["hourlyForecast"],

  data() {
    return {
      hidden1: false,
      hiddenButton1: true,
      hiddenThirdSevenHours: false,
    };
  },

  methods: {
    convertTime(value) {
      return moment.unix(value).format("hh:mm A");
    },

    convertKelvinToFahrenheit(value) {
      return Math.round((parseFloat(value) - 273.15) * 1.8 + 32);
    },

    convertKelvinToCelcius(value) {
      return Math.round(parseFloat(value) - 273.15);
    },

    showMore() {
      this.hidden1 = true;
      this.hiddenButton1 = false;
      this.hiddenThirdSevenHours = true;
    },
  },
};
</script>

<style scoped>
.forecast-display {
  width: 75%;
  margin: 1% auto;
}

.show-more {
  width: 75%;
  margin: 1% auto;
}
</style>
