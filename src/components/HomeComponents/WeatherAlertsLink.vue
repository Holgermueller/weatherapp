<template>
  <div v-if="weatherAlerts">
    <v-card class="weather-alerts">
      <v-card-title class="alert-header">
        Weather Alerts: {{ weatherAlerts.length }}

        <v-spacer></v-spacer>

        <v-chip color="red" dark to="/weatherAlerts">
          See Alerts
          <v-icon right>mdi-arrow-right-circle</v-icon>
        </v-chip>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "WeatherAlertsLink",

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
.weather-alerts {
  width: 75%;
  margin: 1% auto;
}

.alert-header {
  background-color: red;
  color: white;
}
</style>
