<template>
  <v-app>
    <Header :user="user" />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/layout/Header";
import VueJwtDecode from "vue-jwt-decode";
export default {
  components: {
    Header,
  },
  data() {
    return {
      user: null,
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;

    },
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  beforeUpdate() {
    this.getUserDetails();
  },
};
</script>

<style>
</style>