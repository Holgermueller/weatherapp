<template>
  <div>
    <v-card class="seven-day-header">
      <v-card-title class="text-center">
        8 Day Forecast
      </v-card-title>
      <v-card-subtitle class="text-center">
        As of: {{ convertTime(SevenDayForecast[0].dt) }}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "SevenDayHeader",

  props: ["SevenDayForecast"],

  methods: {
    convertTime(value) {
      return moment.unix(value).format("LT");
    },
  },
};
</script>

<style scoped>
.seven-day-header {
  width: 75%;
  margin: 1% auto;
}
</style>
