<template>
  <div>
    <SevenDayHeader :SevenDayForecast="SevenDayForecast" />

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

    <SevenDayExpansion :SevenDayForecast="SevenDayForecast" />
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

  data() {
    return {};
  },

  beforeCreate() {
    this.$store.dispatch("getForecast");
  },

  computed: {
    SevenDayForecast() {
      return this.$store.getters.todaysForecast.daily;
    },

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
