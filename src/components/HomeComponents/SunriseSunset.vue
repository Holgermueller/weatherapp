<template>
  <div id="sunriseSunset">
    <v-card-actions>
      <p>
        <v-icon left>mdi-weather-sunset-up</v-icon>
        Sunrise: {{ timestampToDate(sunrise) }}
      </p>
      <v-spacer></v-spacer>
      <p>
        Sunset:
        {{ timestampToDate(sunset) }}
        <v-icon right>mdi-weather-sunset-down</v-icon>
      </p>
    </v-card-actions>
  </div>
</template>

<script>
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
    timestampToDate(timestamp) {
      let date = new Date(timestamp * 1000);
      return date.toLocaleTimeString();
    },
  },
};
</script>

<style scoped>
#sunriseSunset {
  width: 100%;
}
</style>
