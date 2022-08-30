<template>
  <div id="CurrentWeather">
    <v-container>
      <v-row>
        <v-col>
          <v-card elevation="0" class="weather-display">
            <v-card-text>
              <SearchField />
              <h2 class="text-center display-2 my-4">
                Weather in {{ currentWeather.location }},
                {{ currentWeather.country | getCountryName }}
              </h2>
              <hr />
              <h2 class="text-center display-3 ma-4">
                {{ currentWeather.weather }}
              </h2>

              <h1 class="text-center display-4">
                {{ currentWeather.temp | convertToF }}&deg; F /
                {{ currentWeather.temp | convertToC }}&deg; C
              </h1>

              <h2 class="text-center">
                Feels like: {{ currentWeather.feelsLike | convertToF }}&deg; F /
                {{ currentWeather.feelsLike | convertToC }}&deg; C
              </h2>

              <hr class="my-4" />

              <div class="v-container">
                <v-row>
                  <v-col>
                    <div class="other-data">
                      <h4>
                        Pressure:
                        {{ currentWeather.pressure | convertPressure }} in.
                      </h4>
                      <h4>Humidity: {{ currentWeather.humidity }}&#x25;</h4>
                    </div>
                  </v-col>
                  <v-col>
                    <div class="wind-data">
                      <h4>
                        Winds: {{ currentWeather.wind | convertWindToMPH }} mph
                      </h4>

                      <h4>
                        Direction:
                        {{
                          currentWeather.windDirection | convertWindDirection
                        }}
                      </h4>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <!-- <div>
                {{ currentWeather.timezone }}
              </div> -->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SearchField from "./SearchField.vue";

export default {
  name: "CurrentWeatherDisplay",

  components: {
    SearchField,
  },

  props: {
    currentWeather: {
      type: Object,
    },
  },

  filters: {
    getCountryName(data) {
      const displayName = new Intl.DisplayNames(["en"], { type: "region" });
      return displayName.of(data);
    },

    convertToF(data) {
      return Math.ceil(((data - 273.15) * 9) / 5 + 32);
    },

    convertToC(data) {
      return Math.ceil(data - 273.15);
    },

    convertPressure(data) {
      return Math.ceil(data * 0.02953);
    },

    convertWindToMPH(data) {
      return Math.ceil(data * 2.23694);
    },

    convertWindDirection(data) {
      const compassPoints = [
        "North",
        "North North East",
        "North East",
        "East North East",
        "East",
        "East South East",
        "South East",
        "South South East",
        "South",
        "South South West",
        "South West",
        "West South West",
        "West",
        "West North West",
        "North West",
        "North North West",
      ];

      const numericDirection = Math.ceil(data / 22.5 + 0.5);
      const arrayPosition = numericDirection % 16;
      return compassPoints[arrayPosition];
    },
  },
};
</script>

<style scoped>
.weather-display {
  width: 75%;
  margin: auto;
}
.wind-data {
  text-align: right;
}

@media (max-width: 414px) {
  .v-application .display-4 {
    font-size: 2.5rem !important;
    font-weight: bold;
  }
}

@media (max-width: 720px) {
  .v-application .display-4 {
    font-size: 2rem !important;
    font-weight: bold;
  }
}

@media (max-width: 1180px) {
  .weather-display {
    width: 85%;
  }
}
</style>
