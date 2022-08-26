<template>
  <div id="AboutModal">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="0" text v-bind="attrs" v-on="on"> ABOUT</v-btn>
      </template>

      <v-card>
        <v-card-title>
          <h1>About this app</h1>
        </v-card-title>
        <v-card-text>
          <h1>About this app</h1>
        </v-card-text>
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
};
</script>

<style scoped></style>
