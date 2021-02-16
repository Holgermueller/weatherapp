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
          <v-img
            class="forecast-icon"
            alt="image"
            width="150"
            height="150"
            :src="
              'http://openweathermap.org/img/wn/' +
                day.weather[0].icon +
                '@2x.png'
            "
          ></v-img>

          <h5 class="text-center">
            Description: {{ day.weather[0].description }}
          </h5>

          <h6>UV Index: {{ day.uvi }}</h6>

          <h6 v-if="day.pop">Chance of precipitation: {{ day.pop }} %</h6>

          <h6 v-if="day.snow">
            Accumulation: {{ convertMMtoInches(day.snow) }} /
            {{ convertMMtoCM(day.snow) }} cm
          </h6>

          <h6 v-if="day.rain">Rain: {{ day.rain }}</h6>

          <div class="sunrise-sunset">
            <h6>Sunrise: {{ convertSunriseSunset(day.sunrise) }}</h6>

            <h6>Sunset: {{ convertSunriseSunset(day.sunset) }}</h6>
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

    convertMMtoInches(value) {
      let accumulationInInches = Math.round((value / 10) * 0.3937);

      if (accumulationInInches < 1) {
        return "Less than one inch";
      } else {
        return Math.round((value / 10) * 0.3937) + " inches";
      }
    },

    convertMMtoCM(value) {
      return Math.round(value / 10);
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

.forecast-icon {
  margin: auto;
}
</style>
