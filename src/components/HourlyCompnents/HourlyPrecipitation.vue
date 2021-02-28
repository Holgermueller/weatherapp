<template>
  <div id="accumulationDisplay">
    <h5 v-if="snow || rain">Accumulation:</h5>
    <h5 v-if="snow">
      Snow:
      {{ convertCMtoInches(snow["1h"]) }} /
      {{ convertMMtoCM(snow["1h"]) }}
    </h5>

    <h5 v-if="rain">
      Rain:
      {{ convertCMtoInches(rain["1h"]) }} / {{ convertMMtoCM(rain["h1"]) }}
    </h5>
  </div>
</template>

<script>
export default {
  name: "HourlyPrecipitation",

  props: {
    snow: {
      type: Object,
      required: false,
    },

    rain: {
      type: Object,
      required: false,
    },
  },

  methods: {
    convertMMtoCM(value) {
      return Math.round(value * 10) + " cm";
    },

    convertCMtoInches(value) {
      return Math.round(value * 10 * 0.3937) + " inches";
    },
  },
};
</script>

<style scoped>
#accumulationDisplay {
  margin: 4px 0;
  text-align: center;
}
</style>
