<template>
  <div>
    <v-expansion-panels class="seven-day-display" focusable inset>
      <v-expansion-panel v-for="(day, index) in SevenDayForecast" :key="index">
        <v-card>
          <v-expansion-panel-header>
            <SevenDayExpansionPanelHeaderContent
              :time="day.dt"
              :icon="day.weather[0].icon"
              :maxTemp="day.temp.max"
            />
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-img
              class="forecast-icon"
              alt="image"
              width="150"
              height="150"
              :src="
                'http://openweathermap.org/img/wn/' +
                  day.weather[0].icon +
                  '@2x.png'
              "
            ></v-img>

            <h5 class="text-center">
              Description: {{ day.weather[0].description }}
            </h5>

            <AccummulationDataDisplay
              :pop="day.pop"
              :snow="day.snow"
              :rain="day.rain"
            />

            <v-divider class="divider"></v-divider>

            <TempsThroughtoutDayDisplay :temps="day.temp" />

            <v-divider class="divider"></v-divider>

            <SevenDayUVIForecast :uvIndex="day.uvi" />

            <SevenDaySunriseSunset
              :sunrise="day.sunrise"
              :sunset="day.sunset"
            />
          </v-expansion-panel-content>
        </v-card>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import moment from "moment";
import SevenDayExpansionPanelHeaderContent from "./SevenDayExpansionPanelHeader";
import AccummulationDataDisplay from "./AccummulationData";
import TempsThroughtoutDayDisplay from "./TempsThroughoutDay";
import SevenDayUVIForecast from "./SevenDayUVI";
import SevenDaySunriseSunset from "./SevenDaySunriseSunset";

export default {
  name: "SevenDayExpanstion",

  components: {
    SevenDayExpansionPanelHeaderContent,
    AccummulationDataDisplay,
    TempsThroughtoutDayDisplay,
    SevenDayUVIForecast,
    SevenDaySunriseSunset,
  },

  props: ["SevenDayForecast"],

  methods: {
    convertTimeToDayOfWeek(value) {
      return moment.unix(value).format("ddd Do MMMM YYYY");
    },

    convertKelvinToFahrenheit(value) {
      return Math.round((parseFloat(value) - 273.15) * 1.8 + 32);
    },

    convertKelvinToCelcius(value) {
      return Math.round(parseFloat(value) - 273.15);
    },
  },
};
</script>

<style scoped>
.seven-day-display {
  width: 75%;
  margin: 2% auto;
}

.forecast-icon {
  margin: auto;
}

.divider {
  margin: 3px 0;
}
</style>
