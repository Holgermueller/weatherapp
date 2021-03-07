<template>
  <div>
    <v-card class="hourly-page-header">
      <v-card-title>
        Hourly Forecast

        <v-spacer></v-spacer>

        {{ location[0].name }}, {{ location[0].state }}
      </v-card-title>

      <v-card-subtitle>
        As of: {{ convertTime(hourlyForecastLastForecastTime) }}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "HourlyPageHeader",

  props: {
    location: {
      type: Array,
      required: true,
    },

    hourlyForecastLastForecastTime: {
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
.hourly-page-header {
  width: 75%;
  margin: 1% auto;
}
</style>
