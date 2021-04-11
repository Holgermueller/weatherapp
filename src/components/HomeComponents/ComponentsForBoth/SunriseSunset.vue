<template>
  <div id="sunriseSunset">
    <v-card-actions>
      <strong>
        <v-icon left>mdi-weather-sunset-up</v-icon>
        Sunrise: {{ timestampToDate(sunrise) }}
      </strong>
      <v-spacer></v-spacer>
      <strong>
        Sunset:
        {{ timestampToDate(sunset) }}
        <v-icon right>mdi-weather-sunset-down</v-icon>
      </strong>
    </v-card-actions>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "SunriseSunsetInfo",

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
    timestampToDate(value) {
      return moment.unix(value).format("LT");
    },
  },
};
</script>

<style scoped>
#sunriseSunset {
  width: 100%;
  background-color: orange;
  border-radius: 15px;
}
</style>
