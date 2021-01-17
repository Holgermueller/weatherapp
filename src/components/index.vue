<template>
  <div>
    <DateAndTime />
    <Forecast />
  </div>
</template>

<script>
import DateAndTime from "./HomeComponents/Time";
import Forecast from "./HomeComponents/Forecast";

export default {
  name: "Home",

  components: {
    DateAndTime,
    Forecast,
  },

  data() {
    return {};
  },
};
</script>

<style scoped></style>
