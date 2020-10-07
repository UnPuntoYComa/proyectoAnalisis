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
        gradient="to top right, rgba(19,84,122,.2), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-toolbar-title>Proyecto Analisis de Sistemas II</v-toolbar-title>
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
              <v-icon>mdi-heart</v-icon>
              encuestas
            </v-btn>
          </v-col>
          <v-col cols="2" class="mx-2" v-if="user">
            <v-btn text to="/crear-encuesta">
              <v-icon>mdi-heart</v-icon>
              Crear encuesta
            </v-btn>
          </v-col>
          <v-col cols="2" class="mx-4" v-if="user">
            <v-btn text to="/estadisticas">
              <v-icon>mdi-heart</v-icon>
              Estadisticas
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-row justify="end" v-if="!user">
          <v-col cols="4" class="mx-4">
            <v-btn text to="/signin">
              <v-icon>mdi-dots-vertical</v-icon>
              signin
            </v-btn>
          </v-col>
          <v-col cols="4" class="mx-4">
            <v-btn text to="/signup">
              <v-icon>mdi-dots-vertical</v-icon>
              Signup
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="end" v-if="user">
          <v-col cols="4">
            <v-btn text @click="logUserOut">
              <v-icon>mdi-dots-vertical</v-icon>
              Logout
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header",
  props: {
    user: Object,
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
    },
  },

};
</script>
