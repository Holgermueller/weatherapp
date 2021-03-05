<template>
  <div>
    <v-card class="date-time-display">
      <v-card-title>
        <h4>
          {{ todaysDate }}
        </h4>

        <v-spacer></v-spacer>

        <h4>
          {{ timeRightNow }}
        </h4>
      </v-card-title>
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
