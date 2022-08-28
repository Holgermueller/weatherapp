<template>
  <div id="ErrorCard">
    <v-card class="error-card">
      <v-card-text>
        <h1>
          {{ error.message }}
        </h1>
        <br />
        <h2>
          Sorry, but we can't seem to find

          <strong>
            {{ error.errorLocation }}
          </strong>

          in our list of locations.
        </h2>
        <br />
        <h2>Please check your spelling and try again.</h2>
        <br />
        <SearchField />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import SearchField from "./SearchField.vue";

export default {
  name: "ErrorCard",

  components: {
    SearchField,
  },

  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
};
</script>

<style scoped>
.error-card {
  width: 75%;
  margin: auto;
}

h1,
strong {
  color: red;
}
</style>
