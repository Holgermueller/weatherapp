<template>
  <div id="airQualityDisplayPanels">
    <v-expansion-panels
      v-for="(daysQualityInfo, index) in airQualityForecast"
      :key="index"
      class="air-quality-display-panels"
      focusable
      inset
    >
      <v-expansion-panel>
        <v-expansion-panel-header>
          <v-container>
            <v-row>
              <v-col class="text-left">
                <v-chip outlined :color="`${daysQualityInfo.main.aqi}`">
                  {{ formatTime(daysQualityInfo.dt) }}:
                </v-chip>
              </v-col>
              <v-col class="text-right">
                <v-chip :color="`${daysQualityInfo.main.aqi}`">
                  {{ daysQualityInfo.main.aqi }}
                </v-chip>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          {{ daysQualityInfo.components }}
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
#airQualityDisplayPanels {
  width: 75%;
  margin: auto;
}

.\31 {
  color: green;
}

.\32 {
  color: yellow;
}

.\33 {
  color: orange;
}

.\34 {
  color: red;
}

.\35 {
  color: maroon;
}
</style>
