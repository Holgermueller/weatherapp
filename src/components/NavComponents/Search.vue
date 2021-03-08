<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          <v-icon left>mdi-magnify</v-icon>
          Search
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Seach for weather elsewhere:</v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-container fluid>
              <v-layout wrap>
                <v-flex xs12 sm12 md12 lg12 xl12>
                  <v-text-field
                    type="text"
                    v-model="location"
                    placeholder="Location..."
                    value="location"
                    id="location"
                    outlined
                    clearable
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn @click="dialog = false">Cancel</v-btn>

          <v-spacer></v-spacer>

          <v-btn @click.prevent="searchLocation">Submit</v-btn>
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
    searchLocation() {
      console.log(this.location);

      this.resetForm();
      this.closeDialog();
    },

    resetForm() {
      this.$refs.form.reset();
    },

    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped></style>
