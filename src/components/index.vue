<template>
  <div>
    <DateAndTime />
    <FahrCelciusTabs />
  </div>
</template>

<script>
import DateAndTime from "./HomeComponents/Time";
import FahrCelciusTabs from "./HomeComponents/FahrCelciusTabs";

export default {
  name: "Home",

  components: {
    DateAndTime,
    FahrCelciusTabs,
  },

  data() {
    return {};
  },
};
</script>

<style scoped></style>
