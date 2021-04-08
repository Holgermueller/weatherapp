<template>
  <div :class="`aqi-percentage-visualization ${airQuality.list[0].main.aqi}`">
    <v-card-actions>
      <strong class="aqi-data-displayed">
        <div>
          Air Quality: {{ convertAQToText(airQuality.list[0].main.aqi) }}
        </div>
      </strong>

      <v-spacer></v-spacer>

      <v-btn text to="/airQuality" :class="`${airQuality.list[0].main.aqi}`"
        >More info<v-icon right>mdi-arrow-right</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "AirQualityDisplay",

  props: {
    airQuality: {
      type: Object,
      required: true,
    },
  },

  methods: {
    convertAQToText(value) {
      if (value === 1) {
        return "Good";
      } else if (value === 2) {
        return "Fair";
      } else if (value === 3) {
        return "Bad";
      } else if (value === 4) {
        return "Worse";
      } else {
        return "Worst";
      }
    },
  },
};
</script>

<style scoped>
.aqi-percentage-visualization {
  width: 100%;
  border-radius: 15px;
}

.aqi-data-displayed {
  width: 100%;
  display: inline-block;
  padding: 10px 20px;
}

.chip {
  float: left;
}

.\31 {
  background-color: green;
  color: white;
}

.\32 {
  background-color: yellow;
}

.\33 {
  background-color: orange;
}

.\34 {
  background-color: red;
  color: white;
}

.\35 {
  background-color: maroon;
  color: white;
}
</style>
