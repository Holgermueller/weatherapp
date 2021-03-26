<template>
  <div>
    <HourlyPageHeader
      :hourlyForecastLastForecastTime="allForecasts.hourly[0].dt"
      :location="location"
    />

    <HourlyForecastExpansionPanels :hourlyForecast="allForecasts.hourly" />
  </div>
</template>

<script>
import HourlyPageHeader from "./HourlyCompnents/HourlyPageHeader";
import HourlyForecastExpansionPanels from "./HourlyCompnents/HourlyForecastExpansionPanels";

export default {
  name: "HourlyForecast",

  components: {
    HourlyPageHeader,
    HourlyForecastExpansionPanels,
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
