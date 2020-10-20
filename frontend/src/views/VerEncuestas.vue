<template>
  <v-container fluid>
    <h2 class="text-center text-h2 my-5">Encuestas</h2>
    <v-row justify="center">
      <v-col cols="12" md="3">
        <v-text-field v-model="search" label="Busqueda" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
        v-for="(encuesta, index) in searchEncuesta"
        :key="index"
      >
        <v-card width="">
          <v-img height="150px" src="https://picsum.photos/720/1080">
            <v-card-title class="white--text mt-6 text-h4">
              {{ encuesta.nombre_encuesta}}
            </v-card-title>
            <v-row justify="space-around" align="center">
            <v-card-subtitle>
              <span>link:</span>
            <router-link v-bind:to="'/encuesta/'+encuesta.id_encuesta">{{ "http://localhost:8080/encuesta/"+encuesta.id_encuesta}}</router-link>  
            </v-card-subtitle>
              <v-btn v-bind:to="'/encuesta/'+encuesta.id_encuesta">ir a encuesta</v-btn>
            </v-row>  
          </v-img>
          <v-card-text>
            <Encuesta :questions="encuesta.preguntas" :readOnly="false" />
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block text x-large> enviar </v-btn>
          </v-card-actions>
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
      encuestas: [
        {
          title: "ENCUESTA 1",
          preguntas: [
            {
              id: "3079f8d5-d777-6fb1-89d0-fe08ed74f1b2",
              question: null,
              type: "BOOLEAN",
              multiSelect: false,
              characterLimited: false,
              hasMinMax: false,
              allowDecimals: false,
              sequence: null,
              minValue: 1,
              maxValue: 8,
              labels: [],
              dateFormat: "MM/DD/YYYY",
              timeFormat: "12",
              intervals: 2,
              textLimit: 1024,
              units: null,
              options: [
                { body: "Yes", sequence: 1 },
                { body: "No", sequence: 2 },
              ],
              body: "pregunta",
            },
            {
              id: "0f1870b1-1a8d-f851-48b1-b7e6ebacf427",
              question: null,
              type: "TEXT",
              multiSelect: false,
              characterLimited: false,
              hasMinMax: false,
              allowDecimals: false,
              sequence: null,
              minValue: 1,
              maxValue: 8,
              labels: [],
              dateFormat: "MM/DD/YYYY",
              timeFormat: "12",
              intervals: 2,
              textLimit: 1024,
              units: null,
              options: [
                { body: null, sequence: 1 },
                { body: null, sequence: 2 },
              ],
              body: "pregunta 2",
            },
            {
              id: "e2246c5c-fbe6-acb2-77bc-de3d25c5445d",
              question: null,
              type: "MULTI_CHOICE",
              multiSelect: false,
              characterLimited: false,
              hasMinMax: false,
              allowDecimals: false,
              sequence: null,
              minValue: 1,
              maxValue: 8,
              labels: [],
              dateFormat: "MM/DD/YYYY",
              timeFormat: "12",
              intervals: 2,
              textLimit: 1024,
              units: null,
              options: [
                { body: "opcion A", sequence: 1 },
                { body: "opcion B", sequence: 2 },
              ],
              body: "pregunta multiple",
            },
            {
              id: "150cbde5-e1f0-04bf-6028-ddbdeb010809",
              question: null,
              type: "MULTI_CHOICE",
              multiSelect: false,
              characterLimited: false,
              hasMinMax: false,
              allowDecimals: false,
              sequence: null,
              minValue: 1,
              maxValue: 8,
              labels: [],
              dateFormat: "MM/DD/YYYY",
              timeFormat: "12",
              intervals: 2,
              textLimit: 1024,
              units: null,
              options: [
                { body: "opcion 1", sequence: 1 },
                { body: "opcion 2", sequence: 2 },
                {
                  body: "opcion 3",
                  sequence: 3,
                  nextQuestion: null,
                  imageUrl: null,
                },
              ],
              body: "otra pregunta multiple",
            },
          ],
        }
      ],
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
      const res = await axios.get("http://localhost:4000/api/encuesta/");
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