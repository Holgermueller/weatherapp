<template>
  <div>
    <v-card class="forecast-tabs" width="500">
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
import FahrenheitForecast from "./FahrForecast";
import CelciusForecast from "./CelciusForecast";
import UviInfo from "./UviInfo";
import SunriseSunsetInfo from "./SunriseSunset";

export default {
  name: "FahrCelciusTabs",

  components: {
    FahrenheitForecast,
    CelciusForecast,
    UviInfo,
    SunriseSunsetInfo,
  },

  props: ["todaysForecast"],

  data() {
    return {
      tab: null,
      tabs: [
        {
          tabName: "Fahrenheit",
        },
        {
          tabName: "Celcius",
        },
      ],
    };
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
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
