<template>
  <div id="SearchField">
    <v-form class="form" ref="form">
      <v-text-field
        v-model="cityToSearch"
        class="search-field"
        placeholder="Search other locations"
        prepend-inner-icon="mdi-magnify"
        @click:prepend-inner="getWeather"
        outlined
        clearable
        dense
        full-width
      ></v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "SearchField",
  data: () => ({
    cityToSearch: "",
  }),

  methods: {
    getWeather() {
      console.log("click");
      this.$store.dispatch("getWeatherOnClick", {
        cityToSearch: this.cityToSearch,
      });

      this.clearForm();
    },

    clearForm() {
      this.$refs.form.reset();
      this.cityToSearch = "";
    },
  },
};
</script>

<style scoped>
.form {
  width: 100%;
}
</style>
