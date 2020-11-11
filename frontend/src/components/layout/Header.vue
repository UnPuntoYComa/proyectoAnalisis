<template>
  <v-app-bar
    absolute
    color="#fcb69f"
    dark
    src="https://picsum.photos/1920/1080?random"
    app
    prominent
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(0,0,0,.3), rgba(0,0,0,2.8)"
      ></v-img>
    </template>

    <v-toolbar-title class="text-h4"
      >Proyecto Analisis de Sistemas II
      <div class="d-inline">
        <v-tooltip v-if="!$vuetify.theme.dark" bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text small fab @click="darkMode">
              <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode On</span>
        </v-tooltip>

        <v-tooltip v-else bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text small fab @click="darkMode">
              <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode Off</span>
        </v-tooltip>
      </div>
    </v-toolbar-title>
    <div class="nav">
      <v-btn text to="/" exact>
        <v-icon>mdi-home</v-icon>
        HOME
      </v-btn>
      <v-btn text to="/encuestas" class="pa-0">
        <v-icon>mdi-clipboard-check-multiple</v-icon>
        encuestas
      </v-btn>
      <v-btn v-if="logged" text to="/crear-encuesta" class="pa-0">
        <v-icon>mdi-clipboard-plus</v-icon>
        Crear encuesta
      </v-btn>
      <v-btn v-if="logged" text to="/estadisticas" class="pa-0">
        <v-icon>mdi-chart-bar</v-icon>
        Estadisticas
      </v-btn>
      <v-btn v-if="!logged" text to="/signin">
        <v-icon>mdi-account</v-icon>
        signin
      </v-btn>
      <v-btn v-if="!logged" text to="/signup">
        <v-icon>mdi-account-plus</v-icon>
        Signup
      </v-btn>
      <v-btn v-if="logged" text @click="logUserOut">
        <v-icon>mdi-logout</v-icon>
        Logout
      </v-btn>
    </div>
  </v-app-bar>
</template>
<script>
import { mapState, mapMutations, Store } from "vuex";

export default {
  name: "Header",
  props: {},
  data() {
    return {
      condicion: null,
    };
  },
  methods: {
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/signin");
      this.$store.commit("logout");
    },
    ...mapMutations(["logout"]),
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  computed: { ...mapState(["logged"]) },
};
</script>
<style scoped>
h1 {
  color: rgb(0, 0, 0);
}
.nav .v-btn {
  margin: 0.8rem 1rem;
}
</style>