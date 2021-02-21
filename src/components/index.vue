<template>
  <div>
    <DateAndTime />

    <WeatherAlertsLink :weatherAlerts="allForecasts.alerts" />

    <FahrCelciusTabs :todaysForecast="allForecasts.current" />
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

  props: ["allForecasts"],

  data() {
    return {};
  },
};
</script>

<style scoped></style>
