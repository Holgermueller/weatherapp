<template>
  <div>
    <v-img
      class="forecast-icon"
      alt="image"
      width="100"
      height="100"
      :src="'http://openweathermap.org/img/wn/' + mainForecast.icon + '@2x.png'"
    ></v-img>

    <h5 class="description">
      {{ mainForecast.description }}
    </h5>
  </div>
</template>

<script>
export default {
  name: "MainHourlyForecastDisplay",

  props: {
    mainForecast: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.forecast-icon {
  margin: auto;
}

.description {
  text-align: center;
}
</style>
