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
            <div v-if="tab.tabName === 'Fahrenheit'">
              <FahrenheitForecast />
            </div>
            <div v-else>
              <CelciusForecast />
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import FahrenheitForecast from "./FahrForecast";
import CelciusForecast from "./CelciusForecast";

export default {
  name: "FahrCelciusTabs",

  components: {
    FahrenheitForecast,
    CelciusForecast,
  },

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
};
</script>

<style scoped>
.forecast-tabs {
  margin: auto;
}
</style>
