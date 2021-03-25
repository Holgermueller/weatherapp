<template>
  <div id="sunriseSunset">
    <v-card-actions>
      <strong>
        <v-icon left>mdi-weather-sunset-up</v-icon>
        Sunrise: {{ convertSunriseSunset(sunrise) }}
      </strong>
      <v-spacer></v-spacer>
      <strong>
        Sunset:
        {{ convertSunriseSunset(sunset) }}
        <v-icon right>mdi-weather-sunset-down</v-icon>
      </strong>
    </v-card-actions>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "SevenDaySunriseSunset",

  props: {
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
    convertSunriseSunset(value) {
      return moment.unix(value).format("LT");
    },
  },
};
</script>

<style scoped>
#sunriseSunset {
  width: 100%;
  background-image: linear-gradient(
    to right,
    lightyellow,
    lightblue,
    purple
      /* rgba(255, 255, 0, 0.3),
    rgba(0, 0, 255, 0.3),
    rgba(127, 0, 255, 0.3) */
  );
  background-color: orange;
  border-radius: 15px;
}
</style>
