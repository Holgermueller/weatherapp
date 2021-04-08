<template>
  <div>
    <div class="components-display">
      <div class="pollutant-display">
        <h5 class="pollutant-data">
          Carbon Monoxide: {{ HourlyComponents.co }}
        </h5>
      </div>

      <div class="pollutant-display">
        <h5 class="pollutant-data">
          Nitrogen Monoxide: {{ HourlyComponents["nh3"] }}
        </h5>
      </div>

      <div class="pollutant-display">
        <h5 class="pollutant-data">
          Nitrogen Dioxide: {{ HourlyComponents.no }}
        </h5>
      </div>

      <div class="pollutant-display">
        <h5 class="pollutant-data">Ozone: {{ HourlyComponents["no2"] }}</h5>
      </div>

      <div class="pollutant-display">
        <h5 class="pollutant-data">
          Sulphur Dioxide: {{ HourlyComponents["o3"] }}
        </h5>
      </div>

      <div class="pollutant-display">
        <h5 class="pollutant-data">
          Fine Particles Matter: {{ HourlyComponents["pm10"] }}
        </h5>
      </div>

      <div class="pollutant-display">
        <h5 class="pollutant-data">
          Coarse Particulate Matter: {{ HourlyComponents["pm2_5"] }}
        </h5>
      </div>

      <div class="pollutant-display">
        <h5 class="pollutant-data">Ammonia: {{ HourlyComponents["so2"] }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AQHourlyComponents",

  props: {
    HourlyComponents: {
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
