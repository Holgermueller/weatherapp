<template>
  <div id="SearchField">
    <v-form @keyup.enter="checkForm" class="form" ref="form">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs7 md10 lg10 xl10>
            <v-text-field
              v-model="cityToSearch"
              class="search-field"
              placeholder="Search other locations"
              prepend-inner-icon="mdi-magnify"
              outlined
              clearable
              dense
              full-width
            ></v-text-field
          ></v-flex>
          <v-flex xs4 md2 lg2 xl2>
            <v-btn color="primary" class="submit" @click.prevent="checkForm"
              >Submit</v-btn
            >
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <strong>{{ emptyFieldMessage }}</strong>
  </div>
</template>

<script>
export default {
  name: "SearchField",
  data: () => ({
    cityToSearch: "",
    emptyFieldMessage: "",
  }),

  methods: {
    checkForm() {
      if (this.cityToSearch === "") {
        this.emptyFieldMessage =
          "Oops, looks like you forgot to fill out the field!";
      } else {
        this.getWeather();
      }
    },

    getWeather() {
      this.$store.dispatch("getWeatherOnClick", {
        cityToSearch: this.cityToSearch,
      });

      this.clearForm();
    },

    clearForm() {
      this.$refs.form.reset();
      this.cityToSearch = "";
    },

    getKeyEvent(e) {
      e.preventDefault();

      console.log("Location entered!");
    },
  },
};
</script>

<style scoped>
.form {
  width: 100%;
}
.submit {
  float: right;
}
strong {
  color: red;
}
</style>
