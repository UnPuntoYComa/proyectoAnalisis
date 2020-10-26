<template>
    <v-card-text class="text--primary">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-card-text>
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