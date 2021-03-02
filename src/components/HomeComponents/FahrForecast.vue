<template>
  <div>
    <v-card class="forecast-display">
      <v-card-title>
        <!-- <h1>
          {{ todaysForecast.current.temp }}, {{ todaysForecast.sys.country }}
        </h1> -->
        <v-spacer></v-spacer>
        <h1>{{ convertKelvinToFahrenheit(todaysForecast.temp) }}&#176; F</h1>
      </v-card-title>

      <v-card-subtitle class="text-center">
        <h4>{{ todaysForecast.weather[0].main }}</h4>
        <h4>Description: {{ todaysForecast.weather[0].description }}</h4>
      </v-card-subtitle>

      <v-card-text>
        <v-img
          class="forecast-icon"
          alt="image"
          width="150"
          height="150"
          :src="
            'http://openweathermap.org/img/wn/' +
              todaysForecast.weather[0].icon +
              '@2x.png'
          "
        ></v-img>

        <h4 v-if="todaysForecast.snow || todaysForecast.rain">
          <v-icon left>mdi-ruler</v-icon>
          Precipitation this last hour:
          {{ todaysForecast.snow }}
        </h4>

        <h3>
          <v-icon left>mdi-thermometer</v-icon>
          Feels like:
          {{ convertKelvinToFahrenheit(todaysForecast.feels_like) }}&#176; F
        </h3>

        <v-divider></v-divider>

        <h5>
          <v-icon left>mdi-water-percent</v-icon>
          Humidity: {{ todaysForecast.humidity }}%
        </h5>

        <h5>
          <v-icon left>mdi-arrow-collapse-vertical</v-icon>
          Pressure:
          {{ convertPressureToInches(todaysForecast.pressure) }} inches
        </h5>

        <h5>
          <v-icon left>mdi-water</v-icon>Dew point:
          {{ convertKelvinToFahrenheit(todaysForecast.dew_point) }}&#176; F
        </h5>

        <v-divider></v-divider>

        <h5>
          <v-icon left>mdi-eye-outline</v-icon>
          Visibility:
          {{ convertVisibilityToMiles(todaysForecast.visibility) }}
        </h5>

        <h5>
          <v-icon left>mdi-weather-cloudy</v-icon>
          Cloudiness:
          {{ todaysForecast.clouds }}%
        </h5>

        <h5>
          <v-icon left>mdi-weather-windy</v-icon>
          Wind:
          {{ convertWindDirection(todaysForecast.wind_deg) }}
          {{ convertSpeedToMPH(todaysForecast.wind_speed) }} mph
        </h5>

        <h5 v-if="todaysForecast.wind_gust">
          <v-icon left>mdi-weather-windy</v-icon>
          Gusts: {{ convertMetersPerSecondToMPH(todaysForecast.wind_gust) }} mph
        </h5>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FahrenheitForecast",

  props: ["todaysForecast"],

  data() {
    return {};
  },

  computed: {},

  methods: {
    convertKelvinToFahrenheit(value) {
      return Math.round((parseFloat(value) - 273.15) * 1.8 + 32);
    },

    convertVisibilityToMiles(value) {
      let visibility = Math.round(value * 0.000621371192);

      if (visibility < 1) {
        return Math.round(value * 3.2808) + " feet";
      } else if (visibility == 1) {
        return visibility + " mile";
      } else {
        return visibility + " miles";
      }
    },

    convertPressureToInches(value) {
      return Math.round(value * 0.02953);
    },

    convertSpeedToMPH(value) {
      return Math.round(value * 2.24);
    },

    convertMetersPerSecondToMPH(value) {
      return Math.round(value * 2.23694);
    },

    convertMMtoInches(value) {
      let accumulationInInches = Math.round((value / 10) * 0.3937);

      if (accumulationInInches < 1) {
        return "Less than one inch";
      } else {
        return accumulationInInches + " inches";
      }
    },

    convertWindDirection(value) {
      if (value > 337.5) {
        return "Northerly";
      } else if (value > 292.5) {
        return "North Westerly";
      } else if (value > 247.5) {
        return "Westerly";
      } else if (value > 202.5) {
        return "South Westerly";
      } else if (value > 157.5) {
        return "Southerly";
      } else if (value > 122.5) {
        return "South Easterly";
      } else if (value > 67.5) {
        return "Easterly";
      } else if (value > 22.5) {
        return "North Easterly";
      } else {
        return "Northerly";
      }
    },
  },
};
</script>

<style scoped>
.forecast-icon {
  margin: auto;
}
</style>
