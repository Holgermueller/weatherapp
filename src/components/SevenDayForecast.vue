<template>
  <div>
    <SevenDayHeader :SevenDayForecast="allForecasts.daily" />

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

  props: ["allForecasts"],

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
