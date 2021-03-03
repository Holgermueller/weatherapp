<template>
  <div>
    <h1>Air Quality Info:</h1>

    <h2>As of:</h2>
    <h2>
      {{ formatTime(airQuality.list[0].dt) }}
    </h2>
    <div>
      {{ airQuality.list[0].components }}
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "AirQualityPage",

  beforeCreate() {
    this.$store.dispatch("getAirQuality");
  },

  computed: {
    airQuality() {
      return this.$store.getters.airQuality;
    },
  },

  methods: {
    formatTime(value) {
      return moment.unix(value).format("LT");
    },
  },
};
</script>

<style scoped></style>
