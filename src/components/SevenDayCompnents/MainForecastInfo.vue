<template>
  <div>
    <div>
      <v-container>
        <v-row>
          <v-col class="text-left">
            <h3>
              {{ convertTimeToDayOfWeek(time) }}
            </h3>
          </v-col>
          <v-col class="text-right">
            <h3>
              High: {{ convertKelvinToFahrenheit(maxTemp) }}&#176; F /
              {{ convertKelvinToCelcius(maxTemp) }}&#176; C
            </h3>

            <h5>
              Low: {{ convertKelvinToFahrenheit(minTemp) }}&#176; F /
              {{ convertKelvinToCelcius(minTemp) }}&#176; C
            </h5>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="icon-background" :class="getBackgroundColor()">
      <v-img
        class="forecast-icon"
        alt="image"
        width="150"
        height="150"
        :src="'http://openweathermap.org/img/wn/' + icon + '@2x.png'"
      ></v-img>
    </div>

    <h5 class="text-center">Description: {{ description }}</h5>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "MainForecastInfo",

  props: {
    time: {
      type: Number,
      required: true,
    },

    maxTemp: {
      type: Number,
      required: true,
    },

    minTemp: {
      type: Number,
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    sunrise: {
      type: Number,
      required: true,
    },

    sunset: {
      type: Number,
      required: true,
    },
  },

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

    getBackgroundColor() {
      let now = moment().format("HH:mm");

      let sunrise = moment.unix(this.sunrise).format("HH:mm");

      let sunset = moment.unix(this.sunset).format("HH:mm");

      if (now == sunrise) {
        return "dawn-background";
      } else if (now > sunrise && now < sunset) {
        return "day-background";
      } else if (now == sunset) {
        return "sunset-background";
      } else {
        return "night-background";
      }
    },
  },
};
</script>

<style scoped>
.icon-background {
  margin-bottom: 12px;
  border-radius: 15px;
}

.dawn-background {
  background-image: linear-gradient(#00faff, #ffcd00);
}

.day-background {
  background-color: #00ebff;
}

.sunset-background {
  background-image: linear-gradient(#5f0066, m#ff0500);
}

.night-background {
  background-color: #280066;
}

.forecast-icon {
  margin: auto;
}
</style>
