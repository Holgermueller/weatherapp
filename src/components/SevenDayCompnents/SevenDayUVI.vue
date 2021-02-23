<template>
  <div id="sevenDayUVIndex">
    <h5 class="uvi-header">UV Index</h5>
    <div class="uvi-background">
      <div
        class="uvi-percentage-visualization"
        :style="{ width: uvIndex * 10 }"
      >
        <strong class="uvi-data-displayed">
          <v-icon left>mdi-weather-sunny</v-icon>
          {{ uvIndex }}
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SevenDayUVIForecast",

  props: {
    uvIndex: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
#sevenDayUVIndex {
  width: 100%;
  margin: 0 auto;
}

.uvi-header {
  text-align: center;
}

.uvi-background {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 255, 0.3),
    rgba(255, 255, 0, 0.3),
    rgba(255, 0, 0, 0.3)
  );
  margin: 10px auto;
  position: relative;
  border-radius: 15px;
}

.uvi-percentage-visualization {
  height: 100%;
  box-sizing: border-box;
  border-radius: 15px;
}

.uvi-data-displayed {
  width: 100%;
  text-align: center;
  display: inline-block;
  padding: 10px 20px;
}
</style>
