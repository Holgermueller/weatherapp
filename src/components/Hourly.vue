<template>
  <div>
    <FirstSevenHours :hourlyForecast="todaysForecast" />

    <SecondSevenHours :hourlyForecast="todaysForecast" />
  </div>
</template>

<script>
import FirstSevenHours from "./HourlyCompnents/FirstSevenHours";
import SecondSevenHours from "./HourlyCompnents/SecondSevenHours";

export default {
  name: "HourlyForecast",

  components: {
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

  methods: {
    convertKelvinToFahrenheit(value) {
      return Math.round((parseFloat(value) - 273.15) * 1.8 + 32);
    },

    convertKelvinToCelcius(value) {
      return Math.round(parseFloat(value) - 273.15);
    },
  },
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
