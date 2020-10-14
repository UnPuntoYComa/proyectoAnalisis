<template>
  <v-container>
    <h2 class="text-center text-h2 mt-5 mb-10">crear encuestas</h2>
    <FormEncuesta />
  </v-container>
</template>

<script>
import FormEncuesta from "../components/pages/encuestas/FormEncuesta";
export default {
  components: {
    FormEncuesta,
  },
};
</script>

<style>
</style>