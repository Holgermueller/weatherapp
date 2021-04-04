<template>
  <div id="airQualityDisplayPanels">
    <v-expansion-panels class="air-quality-display-panels" focusable inset>
      <v-expansion-panel
        v-for="(daysQualityInfo, index) in filteredOutOlderDays"
        :key="index"
      >
        <v-expansion-panel-header>
          <v-container>
            <v-row>
              <v-col class="text-left">
                <v-btn
                  :class="`${daysQualityInfo.main.aqi}`"
                  rounded
                  text
                  depressed
                >
                  {{ formatTime(daysQualityInfo.dt) }}:
                </v-btn>
              </v-col>
              <v-col class="text-right">
                <v-btn
                  :class="`${daysQualityInfo.main.aqi}`"
                  rounded
                  text
                  depressed
                >
                  <h4>
                    {{ daysQualityInfo.main.aqi }}
                  </h4>
                </v-btn>
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

  computed: {
    filteredOutOlderDays() {
      let now = moment();

      return this.airQualityForecast.filter((thisDaysQuality) => {
        return thisDaysQuality.dt >= now;
      });
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
}

.\32 {
  background-color: yellow;
}

.\33 {
  background-color: orange;
  color: whitesmoke;
}

.\34 {
  background-color: red;
  color: whitesmoke;
}

.\35 {
  background-color: maroon;
  color: whitesmoke;
}

.components-display {
  margin-top: 8px;
}
</style>
