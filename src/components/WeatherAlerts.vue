<template>
  <div>
    <v-card class="alerts-page-header">
      <v-card-title> Alerts: {{ weatherAlerts.length }} </v-card-title>
    </v-card>

    <WeatherAlertsExpansionPanels :weatherAlerts="weatherAlerts" />
  </div>
</template>

<script>
import WeatherAlertsExpansionPanels from "./WeatherAlertsComponents/AlertsExpansionPanels";

export default {
  name: "WeatherAlerts",

  components: {
    WeatherAlertsExpansionPanels,
  },

  beforeCreate() {
    this.$store.dispatch("getForecast");
  },

  computed: {
    weatherAlerts() {
      return this.$store.getters.todaysForecast.alerts;
    },
  },
};
</script>

<style scoped>
.alerts-page-header {
  width: 75%;
  margin: 1% auto;
}
</style>
