<template>
  <v-card class="mx-auto">
    <v-img
      class="white--text align-end"
      height="150px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Nueva encuesta</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn color="orange" text> Guardar </v-btn>
    </v-card-actions>
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