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
              class="primary--text outer-loading"
              :width="10"
              :size="400"
            >
              <v-progress-circular
                indeterminate
                class="primary--text inner-loading"
                :width="10"
                :size="350"
                rotate="180"
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

@media (max-width: 414px) {
  .v-application .display-4 {
    font-size: 2.5rem !important;
  }

  .outer-loading {
    size: 30px;
  }

  .inner-loading {
    size: 25px;
  }
}
</style>
