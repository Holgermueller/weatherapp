<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="text-left">
          <v-btn :class="`${aqi}`" rounded text depressed>
            {{ formatTime(time) }}:
          </v-btn>
        </v-col>
        <v-col class="text-right">
          <v-btn :class="`${aqi}`" rounded text depressed>
            <h4>
              {{ convertAQToText(aqi) }}
            </h4>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "AirQualityForecastHeader",

  props: {
    time: {
      type: Number,
      required: true,
    },

    aqi: {
      type: Number,
      required: true,
    },
  },

  methods: {
    formatTime(value) {
      return moment.unix(value).format("DD MMM LT");
    },

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
.\31 {
  background-color: green;
  color: whitesmoke;
}

.\32 {
  background-color: yellow;
}

.\33 {
  background-color: orange;
  color: whitesmoke;
}

.\34 {
  background-color: red;
  color: whitesmoke;
}

.\35 {
  background-color: maroon;
  color: whitesmoke;
}
</style>
