<template>
  <v-container fluid>
    <h2 class="text-center text-h2 my-5">{{encuesta.nombre_encuesta}}</h2>
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
        v-for="(encuesta, index) in searchEncuesta"
        :key="index"
      >
        <v-card width="">
          <v-img height="150px" src="https://picsum.photos/720/1080">
            <v-card-title class="white--text mt-8 text-h4">
              {{ encuesta.nombre_encuesta}}
            </v-card-title>
          </v-img>
          <v-card-text>
            <Encuesta :questions="encuesta.preguntas" :readOnly="false" />
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Encuestas from "../components/pages/encuestas/Encuestas";
import Encuesta from "../components/pages/encuestas/Encuestas";
import axios from "axios";
export default {
  components: {
    Encuestas,
    Encuesta,
  },
  data() {
    return {
      search: "",
      encuesta:[]
    };
  },
  computed: {
    searchEncuesta: function () {
      let filterSearch = this.search.toLowerCase();

      return this.encuesta.filter((item) => {
        return item.nombre_encuesta.toLowerCase().includes(filterSearch);
      });
    },
  },
  methods: {
    
  },async created(){
      try{
      const res = await axios.get("http://localhost:4000/api/encuesta/"+this.$route.params.id);
      res.data.forEach( items=>{
        items.preguntas.sort(function (a, b) {
          if (a.orden > b.orden) {
            return 1;
          }  
        });
      }
      );
      this.encuesta= res.data;
        console.log(this.encuesta);
    } catch (e){
        console.log(e);
    }}
};
</script>

<style>
</style>