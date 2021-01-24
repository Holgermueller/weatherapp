<template>
  <div>
    <v-card class="forecast-display">
      <v-card-title>
        <h1>{{ todaysForecast.name }}, {{ todaysForecast.sys.country }}</h1>
        <v-spacer></v-spacer>
        <h1>
          {{ todaysForecast.main.temp }}
        </h1>
      </v-card-title>

      <v-card-subtitle>
        <h3>Feels like: {{ todaysForecast.main.feels_like }}</h3>
      </v-card-subtitle>

      <v-card-text>
        <p>
          {{ timestampToDate(todaysForecast.sys.sunrise) }}
        </p>
        <p>
          {{ timestampToDate(todaysForecast.sys.sunset) }}
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Forecast",

  data() {
    return {};
  },

  beforeCreate() {
    this.$store.dispatch("getForecast");
  },

  computed: {
    todaysForecast() {
      return this.$store.state.weather.todaysForecast;
    },
  },

  methods: {
    timestampToDate(timestamp) {
      let date = new Date(timestamp * 1000);
      return date.toLocaleTimeString();
    },
  },
};
</script>

<style scoped>
.forecast-display {
  width: 75%;
  margin: auto;
}
</style>
