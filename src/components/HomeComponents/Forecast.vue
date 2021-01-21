<template>
  <div>
    <v-card class="forecast-display">
      <v-card-title>
        <h1>Forecast'll appear here.</h1>
      </v-card-title>

      <v-card-text>
        <p>
          {{ todaysForecast.name }}
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Forecast",

  data() {
    return {};
  },

  beforeCreate() {
    this.$store.dispatch("getForecast");
  },

  computed: {
    todaysForecast() {
      return this.$store.state.weather.todaysForecast;
    },
  },
};
</script>

<style scoped>
.forecast-display {
  width: 75%;
  margin: auto;
}
</style>
