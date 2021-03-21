<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h3 class="text-left">
            {{ convertTimeToDayOfWeek(time) }}
          </h3>
        </v-col>

        <v-col>
          <v-fade-transition>
            <v-img
              class="forecast-icon"
              alt="image"
              width="50"
              height="50"
              :src="'http://openweathermap.org/img/wn/' + icon + '@2x.png'"
            ></v-img>
          </v-fade-transition>
        </v-col>

        <v-col>
          <h3 class="text-right">
            <v-icon>mdi-thermometer</v-icon>
            {{ convertKelvinToFahrenheit(maxTemp) }}&#176; F /
            {{ convertKelvinToCelcius(maxTemp) }}&#176; C
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "SevenDayExpansionPanelHeader",

  props: {
    time: {
      type: Number,
      required: true,
    },

    maxTemp: {
      type: Number,
      required: true,
    },

    icon: {
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
