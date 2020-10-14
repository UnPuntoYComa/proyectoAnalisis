<template>
  <v-card class="mx-auto">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      gradient="to bottom , rgba(0,0,0,.2), rgba(0,0,0,.5)"
    >
      <v-card-title class="justify-center text-h1">Nueva encuesta</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-card-text>
   
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      rules: [(v) => v.length <= 25 || "Máximo 25 caracteres"],
    };
  },
};
</script>