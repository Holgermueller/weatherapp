<template>
  <div>
    <v-expansion-panels class="weather-alerts" focusable inset>
      <v-expansion-panel v-for="(alert, index) in weatherAlerts" :key="index">
        <v-expansion-panel-header>
          {{ alert.event }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <h2 class="alert-headline">
            {{ alert.sender_name }}
          </h2>
          <h3>From: {{ convertTime(alert.start) }}</h3>

          <h3>Until: {{ convertTime(alert.end) }}</h3>

          <p class="alert-description">
            {{ alert.description }}
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "WeatherAlertsExpansionPanels",

  props: {
    weatherAlerts: {
      type: Array,
      required: true,
    },
  },

  methods: {
    convertTime(value) {
      return moment.unix(value).format("DD MMM YYYY hh:mm A");
    },
  },
};
</script>

<style scoped>
.weather-alerts {
  width: 75%;
  margin: 1% auto;
}

.alert-headline,
.alert-description {
  margin-top: 8px;
}
</style>
