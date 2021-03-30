<template>
  <div id="airQualityDisplayPanels">
    <v-expansion-panels class="air-quality-display-panels" focusable inset>
      <v-expansion-panel
        v-for="(daysQualityInfo, index) in airQualityForecast"
        :key="index"
      >
        <v-expansion-panel-header>
          <v-container>
            <v-row>
              <v-col class="text-left">
                <h4 :class="`${daysQualityInfo.main.aqi}`">
                  {{ formatTime(daysQualityInfo.dt) }}:
                </h4>
              </v-col>
              <v-col class="text-right">
                <h4 :class="`${daysQualityInfo.main.aqi}`">
                  {{ daysQualityInfo.main.aqi }}
                </h4>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <div class="components-display">
            <h5>
              {{ daysQualityInfo.components.co }}
            </h5>
            <h5>
              {{ daysQualityInfo.components["nh3"] }}
            </h5>
            <h5>
              {{ daysQualityInfo.components.no }}
            </h5>
            <h5>
              {{ daysQualityInfo.components["no2"] }}
            </h5>
            <h5>
              {{ daysQualityInfo.components["o3"] }}
            </h5>
            <h5>
              {{ daysQualityInfo.components["pm10"] }}
            </h5>
            <h5>
              {{ daysQualityInfo.components["pm2_5"] }}
            </h5>
            <h5>
              {{ daysQualityInfo.components["so2"] }}
            </h5>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "AirQualityForecastDisplay",

  props: {
    airQualityForecast: {
      type: Array,
      required: true,
    },
  },

  methods: {
    formatTime(value) {
      return moment.unix(value).format("DD MMM LT");
    },
  },
};
</script>

<style scoped>
.air-quality-display-panels {
  width: 75%;
  margin: 1% auto;
}

.\31 {
  background-color: green;
  color: whitesmoke;
  padding: 4px;
}

.\32 {
  background-color: yellow;
  padding: 4px;
}

.\33 {
  background-color: orange;
  padding: 4px;
}

.\34 {
  color: red;
  padding: 4px;
}

.\35 {
  color: maroon;
  padding: 4px;
}

.components-display {
  margin-top: 8px;
}
</style>
