<template>
  <v-container>
    <h2 class="text-center text-h2 my-5">Estadisticas</h2>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card color="grey darken-4" outlined>
            <BarChart />
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card color="grey darken-4" outlined>
            <LineChart />
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card color="grey darken-4" outlined>
            <PieChart />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import LineChart from "../components/pages/estadisticas/LineChart";
import BarChart from "../components/pages/estadisticas/BarChart";
import PieChart from "../components/pages/estadisticas/PieChart";

export default {
  name: "Estadisticas",
  components: { LineChart, BarChart, PieChart },
  data() {
    return {};
  },
};
</script>