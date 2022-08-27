<template>
  <div id="loadingCard">
    <v-card>
      <v-card-title>
        <h1 class="display-4 text-center">
          Loading...
        </h1>
      </v-card-title>
      <v-card-text class="text-center">
        <v-layout v-if="loading" class="progress">
          <v-flex class="ma-auto">
            <v-progress-circular
              indeterminate
              class="primary--text"
              :width="10"
              :size="400"
            >
              <v-progress-circular
                indeterminate
                class="primary--text"
                :width="10"
                :size="350"
              ></v-progress-circular
            ></v-progress-circular>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoadingCard",

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style scoped>
#loadingCard {
  width: 75%;
  margin: auto;
}
</style>
