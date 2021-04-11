<template>
  <div>
    <v-expansion-panels class="seven-day-display" focusable inset>
      <v-expansion-panel v-for="(day, index) in SevenDayForecast" :key="index">
        <v-expansion-panel-header>
          <template v-slot:default="{ open }">
            <div v-if="open"></div>
            <SevenDayExpansionPanelHeaderContent
              v-else
              :time="day.dt"
              :icon="day.weather[0].icon"
              :maxTemp="day.temp.max"
            />
          </template>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <MainForecastInfo
            :time="day.dt"
            :maxTemp="day.temp.max"
            :minTemp="day.temp.min"
            :icon="day.weather[0].icon"
            :description="day.weather[0].description"
            :sunrise="day.sunrise"
            :sunset="day.sunset"
          />

          <AccummulationDataDisplay
            :pop="day.pop"
            :snow="day.snow"
            :rain="day.rain"
          />

          <v-divider class="divider"></v-divider>

          <TempsThroughtoutDayDisplay :temps="day.temp" />

          <v-divider class="divider"></v-divider>

          <SevenDayUVIForecast :uvIndex="day.uvi" />

          <SevenDaySunriseSunset :sunrise="day.sunrise" :sunset="day.sunset" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import SevenDayExpansionPanelHeaderContent from "./SevenDayExpansionPanelHeader";
import MainForecastInfo from "./MainForecastInfo";
import AccummulationDataDisplay from "./AccummulationData";
import TempsThroughtoutDayDisplay from "./TempsThroughoutDay";
import SevenDayUVIForecast from "./SevenDayUVI";
import SevenDaySunriseSunset from "./SevenDaySunriseSunset";

export default {
  name: "SevenDayExpanstion",

  components: {
    SevenDayExpansionPanelHeaderContent,
    MainForecastInfo,
    AccummulationDataDisplay,
    TempsThroughtoutDayDisplay,
    SevenDayUVIForecast,
    SevenDaySunriseSunset,
  },

  props: {
    SevenDayForecast: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.seven-day-display {
  width: 75%;
  margin: 2% auto;
}

.divider {
  margin: 3px 0;
}
</style>
