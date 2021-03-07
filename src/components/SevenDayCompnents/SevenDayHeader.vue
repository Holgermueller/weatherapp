<template>
  <div>
    <v-card class="seven-day-header">
      <v-card-title class="text-center">
        8 Day Forecast

        <v-spacer></v-spacer>

        {{ location[0].name }}, {{ location[0].state }}
      </v-card-title>
      <v-card-subtitle>
        As of: {{ convertTime(SevenDayForecastLastForecastTime) }}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "SevenDayHeader",

  props: {
    location: {
      type: Array,
      required: true,
    },

    SevenDayForecastLastForecastTime: {
      type: Number,
      required: true,
    },
  },

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
