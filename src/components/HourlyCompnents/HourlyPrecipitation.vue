<template>
  <div id="accumulationDisplay">
    <h5 v-if="snow || rain">Accumulation:</h5>
    <h5 v-if="snow">
      Snow:
      {{ convertMMtoInches(snow["1h"]) }} /
      {{ convertMMtoCM(snow["1h"]) }}
    </h5>

    <h5 v-if="rain">
      Rain:
      {{ convertMMtoInches(rain["1h"]) }} / {{ convertMMtoCM(rain["h1"]) }}
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
      let accumInCM = Math.round(value / 10);

      if (accumInCM < 1) {
        return "Less than 1 cm";
      } else {
        return accumInCM + " cm";
      }
    },

    convertMMtoInches(value) {
      let accumulationInInches = Math.round((value / 10) * 0.3937);

      if (accumulationInInches < 1) {
        return "Less than one inch";
      } else if (accumulationInInches == 1) {
        return accumulationInInches + " inch";
      } else {
        return accumulationInInches + " inches";
      }
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
