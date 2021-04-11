<template>
  <div id="uviInfo" class="uvi-background">
    <v-card-actions>
      <v-spacer></v-spacer>
      <strong>
        <div>
          <v-icon left>mdi-weather-sunny</v-icon>
          UV Index: {{ uviInfo }}
        </div>
      </strong>
      <v-spacer></v-spacer>
    </v-card-actions>
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

<style scoped>
#uviInfo {
  width: 100%;
  margin: 0 auto;
}

.uvi-background {
  background-image: linear-gradient(
    to right,
    rgba(127, 0, 255, 0.3),
    rgba(75, 0, 130, 0.3),
    rgba(0, 0, 255, 0.3),
    rgba(0, 255, 0, 0.3),
    rgba(255, 255, 0, 0.3),
    rgba(255, 165, 0, 0.3),
    rgba(255, 0, 0, 0.3)
  );
  margin: 10px auto;
  text-align: center;
  border-radius: 15px;
  padding: 10px 20px;
}
</style>
