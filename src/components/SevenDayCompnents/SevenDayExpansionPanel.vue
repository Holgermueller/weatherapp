<template>
  <div>
    <v-expansion-panels class="seven-day-display" focusable inset>
      <v-expansion-panel v-for="(day, index) in SevenDayForecast" :key="index">
        <v-card>
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

            <h6 v-if="day.pop">
              Chance of precipitation: {{ convertPOP(day.pop) }}
            </h6>

            <h6 v-if="day.snow">
              Snow: {{ convertMMtoInches(day.snow) }} /
              {{ convertMMtoCM(day.snow) }}
            </h6>

            <h6 v-if="day.rain">
              Rain: {{ convertMMtoInches(day.rain) }} /
              {{ convertMMtoCM(day.rain) }}
            </h6>

            <SevenDayUVIForecast :uvIndex="day.uvi" />

            <SevenDaySunriseSunset
              :sunrise="day.sunrise"
              :sunset="day.sunset"
            />
          </v-expansion-panel-content>
        </v-card>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import moment from "moment";
import SevenDayUVIForecast from "./SevenDayUVI";
import SevenDaySunriseSunset from "./SevenDaySunriseSunset";

export default {
  name: "SevenDayExpanstion",

  components: {
    SevenDayUVIForecast,
    SevenDaySunriseSunset,
  },

  props: ["SevenDayForecast"],

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

    convertMMtoInches(value) {
      let accumulationInInches = Math.round((value / 10) * 0.3937);

      if (accumulationInInches < 1) {
        return "Less than one inch";
      } else {
        return accumulationInInches + " inches";
      }
    },

    convertMMtoCM(value) {
      let accumInCM = Math.round(value / 10);

      if (accumInCM < 1) {
        return "Less than 1 cm";
      } else {
        return accumInCM + "cm";
      }
    },

    convertPOP(value) {
      return Math.round(value * 100) + "%";
    },
  },
};
</script>

<style scoped>
.seven-day-display {
  width: 75%;
  margin: 2% auto;
}

.forecast-icon {
  margin: auto;
}
</style>
