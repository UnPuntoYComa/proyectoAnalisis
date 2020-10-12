<template>
  <v-card class="mx-auto" max-width="600">
    <v-img
      class="white--text align-end"
      height="150px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Nueva encuesta</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> subtitulo </v-card-subtitle>

    <v-card-text class="text--primary">
      <v-row justify="center" class="mx-4">
        <v-text-field
          v-model="input"
          :rules="rules"
          counter="25"
          hint="algun hint"
          label="Titulo encuesta"
        ></v-text-field
      ></v-row>
      <v-row justify="center" class="mx-4">
        <v-text-field
          counter="25"
          hint="Algun hint"
          label="input 2"
        ></v-text-field
      ></v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="orange" text> Guardar </v-btn>
      <v-btn color="indigo accent-3" text> limpiar </v-btn>
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