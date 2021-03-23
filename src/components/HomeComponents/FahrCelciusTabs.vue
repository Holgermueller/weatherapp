<template>
  <div>
    <v-card class="forecast-tabs" width="500">
      <v-card-title>
        {{ location[0].name }}, {{ location[0].state }}

        <v-spacer></v-spacer>

        {{ location[0].country }}
      </v-card-title>

      <v-card-subtitle>
        As of: {{ convertTime(todaysForecast.dt) }}
      </v-card-subtitle>

      <v-tabs v-model="tab" fixed-tabs>
        <v-tab v-for="(tab, index) in tabs" :key="index">
          <h2>
            {{ tab.tabName }}
          </h2>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(tab, index) in tabs" :key="index">
          <v-card>
            <v-card-text>
              <v-layout class="progress">
                <v-flex class="tet-xs-center">
                  <v-progress-circular
                    indeterminate
                    class="primary--text"
                    :width="7"
                    :size="70"
                    v-if="loading"
                  ></v-progress-circular>
                </v-flex>
              </v-layout>

              <div v-if="tab.tabName === 'Fahrenheit'">
                <FahrenheitForecast :todaysForecast="todaysForecast" />
              </div>
              <div v-else>
                <CelciusForecast :todaysForecast="todaysForecast" />
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

      <v-card-actions>
        <AirQualityDisplay :airQuality="airQuality" />
      </v-card-actions>

      <v-card-actions>
        <UviInfo :uviInfo="todaysForecast.uvi" />
      </v-card-actions>

      <v-card-actions>
        <SunriseSunsetInfo
          :sunrise="todaysForecast.sunrise"
          :sunset="todaysForecast.sunset"
        />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
import FahrenheitForecast from "./FahrForecast";
import CelciusForecast from "./CelciusForecast";
import AirQualityDisplay from "./AirQualityDisplay";
import UviInfo from "./UviInfo";
import SunriseSunsetInfo from "./SunriseSunset";

export default {
  name: "FahrCelciusTabs",

  components: {
    FahrenheitForecast,
    CelciusForecast,
    AirQualityDisplay,
    UviInfo,
    SunriseSunsetInfo,
  },

  props: {
    location: {
      type: Array,
      required: true,
    },

    todaysForecast: {
      type: Object,
      required: true,
    },

    airQuality: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      tab: null,
      tabs: [
        {
          tabName: "Fahrenheit",
        },
        {
          tabName: "Celsius",
        },
      ],
    };
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    convertTime(value) {
      return moment.unix(value).format("LT");
    },
  },
};
</script>

<style scoped>
.forecast-tabs {
  margin: 3% auto;
}

.progress {
  margin: auto;
}
</style>
