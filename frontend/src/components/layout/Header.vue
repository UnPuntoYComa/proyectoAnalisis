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

    <v-toolbar-title class="text-h4">Proyecto Analisis de Sistemas II</v-toolbar-title>
    <v-row justify="center">
      <v-col cols="8">
        <v-row justify="center">
          <v-col cols="2" class="mx-2">
            <v-btn text to="/" exact>
              <v-icon>mdi-home</v-icon>
              HOME
            </v-btn>
          </v-col>
          <v-col cols="2" class="mx-2">
            <v-btn text to="/encuestas">
              <v-icon>mdi-clipboard-check-multiple</v-icon>
              encuestas
            </v-btn>
          </v-col>
          <v-col cols="2" class="mx-2" v-if="logged">
            <v-btn text to="/crear-encuesta">
              <v-icon>mdi-clipboard-plus</v-icon>
              Crear encuesta
            </v-btn>
          </v-col>
          <v-col cols="2" class="mx-4" v-if="logged">
            <v-btn text to="/estadisticas">
              <v-icon>mdi-chart-bar</v-icon>
              Estadisticas
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-row justify="end" v-if="!logged">
          <v-col cols="4" class="mx-4">
            <v-btn text to="/signin">
              <v-icon>mdi-account</v-icon>
              signin
            </v-btn>
          </v-col>
          <v-col cols="4" class="mx-4">
            <v-btn text to="/signup">
              <v-icon>mdi-account-plus</v-icon>
              Signup
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="end" v-if="logged">
          <v-col cols="4">
            <v-btn text @click="logUserOut">
              <v-icon>mdi-logout</v-icon>
              Logout
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
import { mapState, mapMutations, Store } from "vuex";

export default {
  name: "Header",
  props: {
   
  },
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
  },
  computed: { ...mapState(["logged"]) },
};
</script>
<style scoped>
h1 {
  color: rgb(0, 0, 0);
}


</style>