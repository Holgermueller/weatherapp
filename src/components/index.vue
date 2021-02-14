<template>
  <div>
    <DateAndTime />

    <WeatherAlertsLink :weatherAlerts="weatherAlerts" />

    <FahrCelciusTabs />
  </div>
</template>

<script>
import DateAndTime from "./HomeComponents/Time";
import WeatherAlertsLink from "./HomeComponents/WeatherAlertsLink";
import FahrCelciusTabs from "./HomeComponents/FahrCelciusTabs";

export default {
  name: "Home",

  components: {
    DateAndTime,
    WeatherAlertsLink,
    FahrCelciusTabs,
  },

  data() {
    return {};
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

<style scoped></style>
