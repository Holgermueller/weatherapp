<template>
  <div>
    <h5 class="gusts" v-if="gusts">
      <v-icon left>mdi-weather-windy</v-icon>
      Gusts: {{ convertMetersPerSecondToMPH(gusts) }} /
      {{ convertMPStoKPH(gusts) }}
    </h5>
  </div>
</template>

<script>
export default {
  name: "HourlyGustsDisplay",

  props: {
    gusts: {
      type: Number,
      required: true,
    },
  },

  methods: {
    convertMetersPerSecondToMPH(value) {
      return Math.round(value * 2.23694) + " mph";
    },

    convertMPStoKPH(value) {
      return Math.round(value * 3.6) + " km/h";
    },
  },
};
</script>

<style scoped>
.gusts {
  text-align: center;
  padding: 8px;
}
</style>
