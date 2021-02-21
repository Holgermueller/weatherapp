<template>
  <div>
    <v-card class="date-time-display">
      <v-card-title class="text-center">
        {{ todaysDate }}
      </v-card-title>
      <v-card-subtitle class="text-center">
        {{ timeRightNow }}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Time",

  data() {
    return {
      todaysDate: moment().format("ddd Do MMM YYYY"),
      timeRightNow: moment().format("LT"),
    };
  },
};
</script>

<style scoped>
.date-time-display {
  width: 55%;
  margin: 2% auto;
}
</style>
