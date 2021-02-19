<template>
  <div>
    <v-card>
      <v-card-title>
        <!-- <h1>{{ todaysForecast.name }}, {{ todaysForecast.sys.country }}</h1> -->
        <v-spacer></v-spacer>
        <h1>{{ convertKelvinToCelcius(todaysForecast.temp) }}&#176; C</h1>
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

        <h3>
          Feels like:
          {{ convertKelvinToCelcius(todaysForecast.feels_like) }}&#176; C
        </h3>

        <p>
          <v-icon left>mdi-water-percent</v-icon>
          Humidity: {{ todaysForecast.humidity }}%
        </p>

        <h5>
          <v-icon left>mdi-arrow-collapse-vertical</v-icon>
          Pressure:
          {{ convertPressureToMetric(todaysForecast.pressure) }} cm
        </h5>

        <h5>
          <v-icon left>mdi-water</v-icon>Dew point:
          {{ convertKelvinToCelcius(todaysForecast.dew_point) }}&#176; C
        </h5>

        <h5>
          <v-icon left>mdi-eye-outline</v-icon>
          Visibility:
          {{ convertVisibilityToMetric(todaysForecast.visibility) }} km
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
          {{ convertMPStoKPH(todaysForecast.wind_speed) }} km/h
        </h5>

        <h5 v-if="todaysForecast.wind_gust">
          Gusts: {{ todaysForecast.wind_gust }} kph
        </h5>

        <div>
          <v-progress-linear height="25" v-model="uviIndex">
            <strong>
              <v-icon left>mdi-weather-sunny</v-icon>
              UV Index: {{ todaysForecast.uvi }}
            </strong>
          </v-progress-linear>
        </div>
      </v-card-text>

      <v-card-actions>
        <p>
          <v-icon left>mdi-weather-sunset-up</v-icon>
          Sunrise: {{ timestampToDate(todaysForecast.sunrise) }}
        </p>
        <v-spacer></v-spacer>
        <p>
          Sunset:
          {{ timestampToDate(todaysForecast.sunset) }}
          <v-icon right>mdi-weather-sunset-down</v-icon>
        </p>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CelciusForecast",

  props: ["todaysForecast"],

  data() {
    return {
      uviIndex: this.todaysForecast.uvi * 10,
    };
  },

  methods: {
    timestampToDate(timestamp) {
      let date = new Date(timestamp * 1000);
      return date.toLocaleTimeString();
    },

    convertKelvinToCelcius(value) {
      return Math.round(parseFloat(value) - 273.15);
    },

    convertVisibilityToMetric(value) {
      return Math.round(value / 1000);
    },

    convertPressureToMetric(value) {
      return Math.round((value * 0.02953) / 0.3937);
    },

    convertMPStoKPH(value) {
      return Math.round(value * 3.6);
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
