<template>
  <div>
    <div class="pollutant-display">
      <h3 class="pollutant-data">
        Carbon Monoxide: {{ CurrentAQComponents.co }}
      </h3>
    </div>

    <div class="pollutant-display">
      <h3 class="pollutant-data">
        Nitrogen Monoxide: {{ CurrentAQComponents.no }}
      </h3>
    </div>

    <div class="pollutant-display">
      <h3 class="pollutant-data">
        Nitrogen Dioxide: {{ CurrentAQComponents["no2"] }}
      </h3>
    </div>

    <div class="pollutant-display">
      <h3 class="pollutant-data">Ozone: {{ CurrentAQComponents["o3"] }}</h3>
    </div>

    <div class="pollutant-display">
      <h3 class="pollutant-data">
        Sulpher Dioxide: {{ CurrentAQComponents["so2"] }}
      </h3>
    </div>

    <div class="pollutant-display">
      <h3 class="pollutant-data">
        Fine particles matter: {{ CurrentAQComponents["pm2_5"] }}
      </h3>
    </div>

    <div class="pollutant-display">
      <h3 class="pollutant-data">
        Coarse particulate matter:
        {{ CurrentAQComponents["pm10"] }}
      </h3>
    </div>

    <div class="pollutant-display">
      <h3 class="pollutant-data">Ammonia: {{ CurrentAQComponents["nh3"] }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentAQComponentsDisplay",

  props: {
    CurrentAQComponents: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.pollutant-display {
  margin: 8px auto;
  background-color: chartreuse;
  text-align: center;
  border-radius: 15px;
}

.pollutant-data {
  padding: 4px;
}
</style>
