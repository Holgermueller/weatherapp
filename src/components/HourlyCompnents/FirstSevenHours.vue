<template>
  <div>
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

    <v-expansion-panels class="forecast-display" focusable inset>
      <v-expansion-panel
        v-for="(hour, index) in hourlyForecast.slice(1, 48)"
        :key="index"
      >
        <v-expansion-panel-header>
          <ExpansionPanelHeaderInfo
            :time="hour.dt"
            :weather="hour.weather[0].main"
            :temp="hour.temp"
          />
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <MainHourlyForecastDisplay :mainForecast="hour.weather[0]" />

          <HourlyPrecipitation :snow="hour.snow" :rain="hour.rain" />

          <v-divider></v-divider>

          <HourlyForecastDataDisplay
            :feelsLike="hour.feels_like"
            :humidity="hour.humidity"
            :pop="hour.pop"
            :uvi="hour.uvi"
          />

          <v-divider v-if="hour.wind_gust"></v-divider>

          <h5 class="gusts" v-if="hour.wind_gust">
            Gusts: {{ hour.wind_gust }}
          </h5>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import ExpansionPanelHeaderInfo from "./ExpansionPanelHeaderInfo";
import MainHourlyForecastDisplay from "./MainHourlyForecast";
import HourlyForecastDataDisplay from "./HourlyForecastDataDisplay";
import HourlyPrecipitation from "./HourlyPrecipitation";

export default {
  name: "FirstSevenHours",

  components: {
    ExpansionPanelHeaderInfo,
    MainHourlyForecastDisplay,
    HourlyForecastDataDisplay,
    HourlyPrecipitation,
  },

  props: ["hourlyForecast"],

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {},
};
</script>

<style scoped>
.forecast-display {
  width: 75%;
  margin: 1% auto 0;
}

.progress {
  width: 55%;
  margin: auto;
}

.gusts {
  text-align: center;
}
</style>
