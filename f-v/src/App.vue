<template>
  <v-app>
    <Header />
    <v-main> 
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/layout/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style>
</style>