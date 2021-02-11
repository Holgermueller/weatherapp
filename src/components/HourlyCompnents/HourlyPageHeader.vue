<template>
  <div>
    <v-card class="hourly-page-header">
      <v-card-title>
        Hourly Forecast
      </v-card-title>

      <v-card-subtitle>
        As of: {{ convertTime(hourlyForecast[0].dt) }} / {{}}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "HourlyPageHeader",

  props: ["hourlyForecast"],

  methods: {
    convertTime(value) {
      return moment.unix(value).format("hh:mm A");
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
