<template>
  <div>
    <v-card class="date-time-display">
      <v-card-title>
        {{ todaysDate }}
      </v-card-title>
      <v-card-subtitle>
        {{ timeRightNow }}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Home",

  data() {
    return {
      todaysDate: moment().format("Do MMM YYYY"),
      timeRightNow: moment().format("HH:MM:SS"),
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
