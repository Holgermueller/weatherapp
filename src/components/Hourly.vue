<template>
  <div>
    <HourlyPageHeader :hourlyForecast="todaysForecast" />

    <FirstSevenHours :hourlyForecast="todaysForecast" />

    <SecondSevenHours :hourlyForecast="todaysForecast" />
  </div>
</template>

<script>
import HourlyPageHeader from "./HourlyCompnents/HourlyPageHeader";
import FirstSevenHours from "./HourlyCompnents/FirstSevenHours";
import SecondSevenHours from "./HourlyCompnents/SecondSevenHours";

export default {
  name: "HourlyForecast",

  components: {
    HourlyPageHeader,
    FirstSevenHours,
    SecondSevenHours,
  },

  beforeCreate() {
    this.$store.dispatch("getForecast");
  },

  computed: {
    todaysForecast() {
      return this.$store.state.weather.todaysForecast.hourly;
    },
  },

  methods: {},
};
</script>

<style scoped>
.forecast-display {
  width: 75%;
  margin: 1% auto;
}

.show-more {
  width: 75%;
  margin: 1% auto;
}
</style>
