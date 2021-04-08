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
          <AQHourlyComponents :HourlyComponents="daysQualityInfo.components" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import moment from "moment";
import AirQualityForecastHeader from "./AirQualityForecastHeader";
import AQHourlyComponents from "./AQHourlyComponents";

export default {
  name: "AirQualityForecastDisplay",

  components: {
    AirQualityForecastHeader,
    AQHourlyComponents,
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
</style>
