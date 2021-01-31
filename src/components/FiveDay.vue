<template>
  <div>
    <v-card class="forecast-display">
      <v-card-title>
        {{ fiveDayForecast.city.name }}, {{ fiveDayForecast.city.country }}
      </v-card-title>

      <v-card-text>
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
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FiveDay",

  data() {
    return {};
  },

  beforeCreate() {
    this.$store.dispatch("getFiveDayForecast");
  },

  computed: {
    fiveDayForecast() {
      return this.$store.state.fiveDay.fiveDayForecast;
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
