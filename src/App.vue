<template>
  <v-app>
    <v-app-bar app color="red" dark>
      <div v-for="link in menuLinks" :key="link.title" link>
        <v-btn :to="link.link" elevation="0">
          <v-icon left>
            {{ link.icon }}
          </v-icon>
          {{ link.title }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      menuLinks: [
        {
          icon: "mdi-home",
          title: "Home",
          link: "/",
        },
        {
          icon: "mdi-home",
          title: "5 Day Forecast",
          link: "fiveDay",
        },
      ],
    };
  },
};
</script>
