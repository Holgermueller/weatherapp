<template>
  <div id="uviInfo">
    <h6>
      {{ uviInfo }}
    </h6>
  </div>
</template>

<script>
export default {
  name: "UviInfo",

  props: {
    uviInfo: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
