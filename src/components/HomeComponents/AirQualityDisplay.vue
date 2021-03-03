<template>
  <div class="aqi-percentage-visualization">
    <strong class="aqi-data-displayed">
      Air Quality:
      {{ airQuality.list[0].main.aqi }}
    </strong>
    <v-chip to="/airQuality">More info</v-chip>
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
  background-color: orange;
  border-radius: 15px;
}

.aqi-data-displayed {
  width: 100%;
  text-align: center;
  display: inline-block;
  padding: 10px 20px;
}

.chip {
  float: left;
}
</style>
