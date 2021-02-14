<template>
  <div>
    <v-card class="alerts-page-header">
      <v-card-title>
        <h3>
          <v-icon dark left>mdi-exclamation-thick</v-icon>
          Alerts: {{ weatherAlerts.length }}
        </h3>
      </v-card-title>
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
  background-color: red;
  color: white;
}
</style>
