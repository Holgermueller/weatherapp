<template>
  <div :class="`aqi-percentage-visualization ${airQuality.list[0].main.aqi}`">
    <v-card-actions>
      <strong class="aqi-data-displayed ">
        <div v-if="airQuality.list[0].main.aqi == 1">Air Quality: Good</div>
        <div v-if="airQuality.list[0].main.aqi == 2">Air Quality: Fair</div>
        <div v-if="airQuality.list[0].main.aqi == 3">Air Quality: Bad</div>
        <div v-if="airQuality.list[0].main.aqi == 4">Air Quality: Worse</div>
        <div v-if="airQuality.list[0].main.aqi == 5">Air Quality: Worst</div>
      </strong>

      <v-spacer></v-spacer>

      <v-btn text to="/airQuality"
        >More info <v-icon> mdi-arrow-right</v-icon>
      </v-btn>
    </v-card-actions>
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
