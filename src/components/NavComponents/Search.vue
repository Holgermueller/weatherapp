<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          Search
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <v-text-field placeholder="Location..."></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-btn>Cancel</v-btn>

          <v-spacer></v-spacer>

          <v-btn>Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "NavBarSearchField",

  data() {
    return {
      dialog: false,
      location: "",
    };
  },

  methods: {
    searchLocation() {},
  },
};
</script>

<style scoped></style>
