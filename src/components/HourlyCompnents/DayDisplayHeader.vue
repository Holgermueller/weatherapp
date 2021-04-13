<template>
  <div>
    <h5>
      {{ formatDayOfWeek(time) }}
    </h5>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "DayDisplayHeader",

  props: {
    time: {
      type: Number,
      required: true,
    },
  },

  methods: {
    formatDayOfWeek(value) {
      return moment.unix(value).format("dddd, MMMM Do");
    },
  },
};
</script>

<style scoped></style>
