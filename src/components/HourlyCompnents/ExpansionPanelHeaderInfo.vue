<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h3 class="text-left">{{ convertTime(time) }}</h3>
        </v-col>
        <v-col
          ><h3 class="text-left">
            {{ weather }}
          </h3></v-col
        >
        <v-col>
          <h3 class="text-right">
            <v-icon>mdi-thermometer</v-icon>
            {{ convertKelvinToFahrenheit(temp) }}&#176; F /
            {{ convertKelvinToCelcius(temp) }}&#176; C
          </h3></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ExpansionPanelHeaderInfo",

  props: {
    time: {
      type: Number,
      required: true,
    },

    weather: {
      type: String,
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

<style scoped></style>
