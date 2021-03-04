<template>
  <div :class="`aqi-percentage-visualization ${airQuality.list[0].main.aqi}`">
    <strong class="aqi-data-displayed ">
      Air Quality:
      {{ airQuality.list[0].main.aqi }}
      <div v-if="airQuality.list[0].main.aqi == 1">Good</div>
      <div v-if="airQuality.list[0].main.aqi == 2">Fair</div>
      <div v-if="airQuality.list[0].main.aqi == 3">Bad</div>
      <div v-if="airQuality.list[0].main.aqi == 4">Worse</div>
      <div v-if="airQuality.list[0].main.aqi == 5">Worst</div>
    </strong>

    <v-chip outlined to="/airQuality"
      >More info <v-icon right> mdi-arrow-right</v-icon>
    </v-chip>
  </div>
</template>

<script>
export default {
  name: "AirQualityDisplay",

  props: {
    airQuality: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.aqi-percentage-visualization {
  width: 100%;
  border-radius: 15px;
}

.aqi-data-displayed {
  width: 100%;
  display: inline-block;
  padding: 10px 20px;
}

.chip {
  float: left;
}

.\31 {
  background-color: green;
}

.\32 {
  background-color: yellow;
}

.\33 {
  background-color: orange;
}

.\34 {
  background-color: red;
}

.\35 {
  background-color: maroon;
}
</style>
