<template>
  <div>
    <SevenDayHeader
      :SevenDayForecastLastForecastTime="allForecasts.daily[0].dt"
      :location="location"
    />

    <v-layout class="progress">
      <v-flex class="tet-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"
        ></v-progress-circular>
      </v-flex>
    </v-layout>

    <SevenDayExpansion :SevenDayForecast="allForecasts.daily" />
  </div>
</template>

<script>
import SevenDayHeader from "./SevenDayCompnents/SevenDayHeader";
import SevenDayExpansion from "./SevenDayCompnents/SevenDayExpansionPanel";

export default {
  name: "SevenDay",

  components: {
    SevenDayHeader,
    SevenDayExpansion,
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

  data() {
    return {};
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style scoped>
.forecast-display {
  width: 75%;
  margin: 7% auto;
}
</style>
