<template>
  <div>
    <div v-if="hidden1">
      <v-expansion-panels class="forecast-display" focusable inset>
        <v-expansion-panel
          v-for="(hour, index) in hourlyForecast.slice(7, 14)"
          :key="index"
        >
          <v-expansion-panel-header>
            {{ convertTime(hour.dt) }}
            <v-spacer></v-spacer>
            {{ convertKelvinToFahrenheit(hour.temp) }}&#176; F /
            {{ convertKelvinToCelcius(hour.temp) }}&#176; C
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            Feels like: {{ convertKelvinToFahrenheit(hour.feels_like) }}&#176; F
            / {{ convertKelvinToCelcius(hour.feels_like) }}&#176; C

            <v-img
              class="forecast-icon"
              alt="image"
              width="100"
              height="100"
              :src="
                'http://openweathermap.org/img/wn/' +
                  hour.weather[0].icon +
                  '@2x.png'
              "
            ></v-img>

            {{ hour.weather[0].description }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

    <div class="show-more" v-if="hiddenButton1">
      <v-btn class="show-more-btn" block @click.prevent="showMore"
        >Show More</v-btn
      >
    </div>

    <ThirdSevenHours
      v-if="hiddenThirdSevenHours"
      :hourlyForecast="hourlyForecast"
    />
  </div>
</template>

<script>
import moment from "moment";
import ThirdSevenHours from "./ThirdSevenHours";

export default {
  name: "SecondSevenHours",

  components: {
    ThirdSevenHours,
  },

  props: ["hourlyForecast"],

  data() {
    return {
      hidden1: false,
      hiddenButton1: true,
      hiddenThirdSevenHours: false,
    };
  },

  methods: {
    convertTime(value) {
      return moment.unix(value).format("hh:mm A");
    },

    convertKelvinToFahrenheit(value) {
      return Math.round((parseFloat(value) - 273.15) * 1.8 + 32);
    },

    convertKelvinToCelcius(value) {
      return Math.round(parseFloat(value) - 273.15);
    },

    showMore() {
      this.hidden1 = true;
      this.hiddenButton1 = false;
      this.hiddenThirdSevenHours = true;
    },
  },
};
</script>

<style scoped>
.forecast-display {
  width: 75%;
  margin: 0 auto 1%;
}

.show-more {
  width: 75%;
  margin: 1% auto;
}

.forecast-icon {
  margin: auto;
}
</style>
