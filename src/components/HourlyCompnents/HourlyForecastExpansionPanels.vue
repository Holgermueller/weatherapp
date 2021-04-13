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
        <v-card>
          <v-card-title>
            <DayDisplayHeader :time="hour.dt" />
          </v-card-title>
        </v-card>

        <v-expansion-panel-header>
          <template v-slot:default="{ open }">
            <div v-if="open"></div>
            <ExpansionPanelHeaderInfo
              v-else
              :time="hour.dt"
              :weather="hour.weather[0].main"
              :temp="hour.temp"
            />
          </template>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <MainHourlyForecastDisplay
            :mainForecast="hour.weather[0]"
            :time="hour.dt"
            :temp="hour.temp"
          />

          <HourlyPrecipitation :snow="hour.snow" :rain="hour.rain" />

          <v-divider></v-divider>

          <HourlyForecastDataDisplay
            :feelsLike="hour.feels_like"
            :humidity="hour.humidity"
            :pop="hour.pop"
            :uvi="hour.uvi"
          />

          <v-divider v-if="hour.wind_gust"></v-divider>

          <HourlyGustsDisplay :gusts="hour.wind_gust" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import DayDisplayHeader from "./DayDisplayHeader";
import ExpansionPanelHeaderInfo from "./ExpansionPanelHeaderInfo";
import MainHourlyForecastDisplay from "./MainHourlyForecast";
import HourlyForecastDataDisplay from "./HourlyForecastDataDisplay";
import HourlyPrecipitation from "./HourlyPrecipitation";
import HourlyGustsDisplay from "./HourlyGusts";

export default {
  name: "FirstSevenHours",

  components: {
    DayDisplayHeader,
    ExpansionPanelHeaderInfo,
    MainHourlyForecastDisplay,
    HourlyForecastDataDisplay,
    HourlyPrecipitation,
    HourlyGustsDisplay,
  },

  props: {
    hourlyForecast: {
      type: Array,
      required: true,
    },
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style scoped>
.forecast-display {
  width: 75%;
  margin: 1% auto 7%;
}

.progress {
  width: 55%;
  margin: auto;
}
</style>
