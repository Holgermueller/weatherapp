<template>
  <div id="CurrentWeather">
    <v-container>
      <v-row>
        <v-col>
          <v-card elevation="0" class="weather-display">
            <v-card-title>
              <h2 class="ma-auto display-2">
                Weather in {{ currentWeather.location }}
              </h2>
              <hr />
            </v-card-title>

            <v-card-text>
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
                        {{
                          currentWeather.windDirection | convertWindDirection
                        }}
                      </h4>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CurrentWeatherDisplay",
  props: {
    currentWeather: {
      type: Object,
    },
  },

  filters: {
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
</style>
