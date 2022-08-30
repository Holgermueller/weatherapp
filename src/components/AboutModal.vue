<template>
  <div id="AboutModal">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="0" v-bind="attrs" v-on="on"> ABOUT</v-btn>
      </template>

      <v-card>
        <v-card-title>
          <h1>About this app</h1>
        </v-card-title>
        <v-card-text>
          <br />
          <hr />
          <br />
          <p class="body-1">
            This app fetches data from the OpenWeatherAPI. On loading, it grabs
            the current weather conditions of the user's immediate location, via
            geolocation.
          </p>

          <p class="body-1">
            The background image displayed is conditional, depending on current
            weather conditions.
          </p>

          <p class="body-1">
            Unfortunately, the API is limited and does not recognize every
            location on the globe. By that, I mean, for example, entering
            Athens, Georgia will grab the weather data for Athens, Greece.
          </p>

          <p class="body-1">
            Sometimes it will return seemingly strange data. By that I mean,
            searching Dublin will return a Dublin in the United States, and not
            Dublin, Ireland.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AboutModal",

  data: () => ({
    dialog: false,
  }),

  methods: {
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped></style>
