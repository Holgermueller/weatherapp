<template>
  <div id="airQualityDisplayPanels">
    <v-expansion-panels class="air-quality-display-panels" focusable inset>
      <v-expansion-panel
        v-for="(daysQualityInfo, index) in filteredOutOlderDays"
        :key="index"
      >
        <v-expansion-panel-header>
          <AirQualityForecastHeader
            :time="daysQualityInfo.dt"
            :aqi="daysQualityInfo.main.aqi"
          />
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <div class="components-display">
            <div class="pollutant-display">
              <h5 class="pollutant-data">
                {{ daysQualityInfo.components.co }}
              </h5>
            </div>

            <div class="pollutant-display">
              <h5 class="pollutant-data">
                {{ daysQualityInfo.components["nh3"] }}
              </h5>
            </div>

            <div class="pollutant-display">
              <h5 class="pollutant-data">
                {{ daysQualityInfo.components.no }}
              </h5>
            </div>

            <div class="pollutant-display">
              <h5 class="pollutant-data">
                {{ daysQualityInfo.components["no2"] }}
              </h5>
            </div>

            <div class="pollutant-display">
              <h5 class="pollutant-data">
                {{ daysQualityInfo.components["o3"] }}
              </h5>
            </div>

            <div class="pollutant-display">
              <h5 class="pollutant-data">
                {{ daysQualityInfo.components["pm10"] }}
              </h5>
            </div>

            <div class="pollutant-display">
              <h5 class="pollutant-data">
                {{ daysQualityInfo.components["pm2_5"] }}
              </h5>
            </div>

            <div class="pollutant-display">
              <h5 class="pollutant-data">
                {{ daysQualityInfo.components["so2"] }}
              </h5>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import moment from "moment";
import AirQualityForecastHeader from "./AirQualityForecastHeader";

export default {
  name: "AirQualityForecastDisplay",

  components: {
    AirQualityForecastHeader,
  },

  props: {
    airQualityForecast: {
      type: Array,
      required: true,
    },
  },

  computed: {
    filteredOutOlderDays() {
      let now = moment().unix();

      return this.airQualityForecast.filter((thisDaysQuality) => {
        return thisDaysQuality.dt >= now;
      });
    },
  },

  methods: {},
};
</script>

<style scoped>
.air-quality-display-panels {
  width: 75%;
  margin: 1% auto;
}

.components-display {
  margin-top: 8px;
}

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
