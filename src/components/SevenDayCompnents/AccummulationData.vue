<template>
  <div id="accummDataDisplay">
    <h6 v-if="pop">Chance of precipitation: {{ convertPOP(pop) }}</h6>

    <h6 v-if="snow">
      Snow: {{ convertMMtoInches(snow) }} /
      {{ convertMMtoCM(snow) }}
    </h6>

    <h6 v-if="rain">
      Rain: {{ convertMMtoInches(rain) }} /
      {{ convertMMtoCM(rain) }}
    </h6>
  </div>
</template>

<script>
export default {
  name: "AccummulationDataDisplay",

  props: {
    pop: {
      type: Number,
      required: false,
    },

    snow: {
      type: Number,
      required: false,
    },

    rain: {
      type: Number,
      required: false,
    },
  },

  methods: {
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

    convertMMtoCM(value) {
      let accumInCM = Math.round(value / 10);

      if (accumInCM < 1) {
        return "Less than 1 cm";
      } else {
        return accumInCM + " cm";
      }
    },

    convertPOP(value) {
      return Math.round(value * 100) + "%";
    },
  },
};
</script>

<style scoped>
#accummDataDisplay {
  text-align: center;
  margin: 4px 0;
}
</style>
