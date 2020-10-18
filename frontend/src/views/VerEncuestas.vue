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
            <v-card-title class="white--text mt-8 text-h4">
              {{ encuesta.title }}
            </v-card-title>
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
        },
        {
          title: "ENCUESTA 2",
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
          ],
        },
        {
          title: "ENCUESTA 3",
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
        },
      ],
    };
  },
  computed: {
    searchEncuesta: function () {
      let filterSearch = this.search.toLowerCase();

      return this.encuestas.filter((item) => {
        return item.title.toLowerCase().includes(filterSearch);
      });
    },
  },
};
</script>

<style>
</style>