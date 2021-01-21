<template>
  <div>
    <v-card class="forecast-display">
      <v-card-title>
        <h1>Forecast'll appear here.</h1>
      </v-card-title>

      <v-card-text> </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Forecast",

  data() {
    return {
      lat: null,
      long: null,
    };
  },

  created() {
    this.$store.dispatch("getForecast");
  },

  computed: {
    location() {
      return this.$store.state.location;
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
