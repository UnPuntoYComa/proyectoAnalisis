<template>
  <v-container>
    <h2 class="text-center text-h2 my-5">Encuestas</h2>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <Encuestas />
      </v-col>
      <v-col cols="12" md="4">
        <Encuestas />
      </v-col>
      <v-col cols="12" md="4">
        <Encuestas />
      </v-col>
      <v-col cols="12" md="4">
        <Encuestas />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Encuestas from "../components/pages/encuestas/Encuestas";
export default {
  components: {
    Encuestas,
  },
};
</script>

<style>
</style>