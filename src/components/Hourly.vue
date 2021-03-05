<template>
  <div>
    <HourlyPageHeader
      :hourlyForecast="allForecasts.hourly"
      :location="location"
    />

    <FirstSevenHours :hourlyForecast="allForecasts.hourly" />

    <SecondSevenHours :hourlyForecast="allForecasts.hourly" />
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

  props: {
    location: {
      type: Array,
      required: true,
    },

    allForecasts: {
      type: Object,
      required: true,
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
