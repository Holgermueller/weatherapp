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
          <v-container>
            <v-row>
              <v-col>
                <h3>{{ convertTime(hour.dt) }}</h3>
              </v-col>
              <v-col
                ><h3 class="text-left">
                  {{ hour.weather[0].main }}
                </h3></v-col
              >
              <v-col>
                <h3 class="text-right">
                  {{ convertKelvinToFahrenheit(hour.temp) }}&#176; F /
                  {{ convertKelvinToCelcius(hour.temp) }}&#176; C
                </h3></v-col
              >
            </v-row>
          </v-container>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
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

          <h5 class="description">
            {{ hour.weather[0].description }}
          </h5>

          <h5 v-if="hour.snow">{{ hour.snow }}</h5>

          <v-divider></v-divider>

          <v-container>
            <v-row no-gutters>
              <v-col>
                <h5>Feels like:</h5>
                <h5>
                  {{ convertKelvinToFahrenheit(hour.feels_like) }}&#176; F /
                  {{ convertKelvinToCelcius(hour.feels_like) }}&#176; C
                </h5>
              </v-col>
              <v-col>
                <h5>Humidity:</h5>
                <h5>{{ hour.humidity }}%</h5>
              </v-col>
              <v-col
                ><h5>Chance of Precipitation:</h5>
                <h5>{{ hour.pop }}%</h5></v-col
              >
              <v-col
                ><h5>UV Index:</h5>
                <h5>
                  {{ hour.uvi }}
                </h5></v-col
              >
            </v-row>
          </v-container>

          <h5 v-if="hour.wind_gust">Gusts: {{ hour.wind_gust }}</h5>
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

.description {
  text-align: center;
}

.col {
  text-align: center;
}
</style>
