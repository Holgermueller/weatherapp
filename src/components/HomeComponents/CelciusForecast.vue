<template>
  <div>
    <v-card>
      <h1>{{ todaysForecast.name }}, {{ todaysForecast.sys.country }}</h1>
      <v-spacer></v-spacer>
      <h1>{{ convertKelvinToCelcius(todaysForecast.main.temp) }}&#176; C</h1>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CelciusForecast",

  data() {
    return {};
  },
};
</script>

<style scoped></style>
