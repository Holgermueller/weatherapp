<template>
  <div>
    <v-card>
      <v-card-title class="justify-center">
        <h1>{{ convertKelvinToCelcius(todaysForecast.temp) }}&#176; C</h1>
      </v-card-title>

      <v-card-subtitle class="text-center">
        <h4>{{ todaysForecast.weather[0].main }}</h4>
        <h4>Description: {{ todaysForecast.weather[0].description }}</h4>
      </v-card-subtitle>

      <v-card-text>
        <div class="icon-background">
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
        </div>

        <h4 v-if="todaysForecast.snow || todaysForecast.rain">
          <v-icon left>mdi-ruler</v-icon>
          Precipitation this last hour:
          {{ convertMMtoCM(todaysForecast.snow["1h"]) }}
        </h4>

        <h3>
          <v-icon left>mdi-thermometer</v-icon>
          Feels like:
          {{ convertKelvinToCelcius(todaysForecast.feels_like) }}&#176; C
        </h3>

        <v-divider></v-divider>

        <h5>
          <v-icon left>mdi-water-percent</v-icon>
          Humidity: {{ todaysForecast.humidity }}%
        </h5>

        <h5>
          <v-icon left>mdi-arrow-collapse-vertical</v-icon>
          Pressure:
          {{ todaysForecast.pressure }} mb
        </h5>

        <h5>
          <v-icon left>mdi-water</v-icon>Dew point:
          {{ convertKelvinToCelcius(todaysForecast.dew_point) }}&#176; C
        </h5>

        <v-divider></v-divider>

        <h5>
          <v-icon left>mdi-eye-outline</v-icon>
          Visibility:
          {{ convertVisibilityToKm(todaysForecast.visibility) }}
        </h5>

        <h5>
          <v-icon left>mdi-weather-cloudy</v-icon>
          Clouds:
          {{ todaysForecast.clouds }}%
        </h5>

        <h5>
          <v-icon left>mdi-weather-windy</v-icon>
          Wind:
          {{ convertWindDirection(todaysForecast.wind_deg) }}
          {{ convertMPStoKPH(todaysForecast.wind_speed) }}
        </h5>

        <h5 v-if="todaysForecast.wind_gust">
          <v-icon left>mdi-weather-windy</v-icon>
          Gusts: {{ convertMPStoKPH(todaysForecast.wind_gust) }}
        </h5>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CelciusForecast",

  props: {
    todaysForecast: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },

  methods: {
    convertKelvinToCelcius(value) {
      return Math.round(parseFloat(value) - 273.15);
    },

    convertMMtoCM(value) {
      let accumInCM = Math.round(value / 10);

      if (accumInCM < 1) {
        return "Less than 1 cm";
      } else {
        return accumInCM + "cm";
      }
    },

    convertVisibilityToKm(value) {
      let visibility = Math.round(value / 1000);

      if (visibility < 1) {
        return value + " meters";
      } else {
        return visibility + " km";
      }
    },

    convertPressureToMetric(value) {
      return Math.round((value * 0.02953) / 0.3937);
    },

    convertMPStoKPH(value) {
      return Math.round(value * 3.6) + " km/h";
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
.icon-background {
  background-color: #00ebff;
  margin-bottom: 12px;
  border-radius: 15px;
}

.forecast-icon {
  margin: auto;
}
</style>
