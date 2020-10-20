<template>
  <v-row justify="center">
    <v-col cols="12" md="6" v-for="(question, index) in questions" :key="index">
      <v-card
        v-if="selectedQuestion.id !== question.id"
        width="100%"
        height="100%"
        elevation="12"
      >
        <div class="question-section">
          <v-card-title>
            Pregunta
            <span class="">{{ index + 1 }}:</span>
          </v-card-title>
        </div>
        <v-card-subtitle class="body-1">
          {{ question.texto_pregunta }}
        </v-card-subtitle>
        <v-card-text>
          <v-container v-if="question.modo_respuesta === 'BOOLEAN'">
            <v-radio-group v-model="radios" :mandatory="false">
              <v-radio
                v-for="(option, index) in question.opcion_respuesta"
                :key="index"
                :label="option.texto"
                value=""
              ></v-radio>
            </v-radio-group>
          </v-container>
          <v-container v-if="question.modo_respuesta === 'TEXT'"
            ><v-text-field outlined />
          </v-container>
          <v-container v-if="question.modo_respuesta === 'SINGLE_CHOICE'">
            <v-radio-group v-model="radios" :mandatory="false">
              <v-radio
                v-for="(option, index) in question.opcion_respuesta"
                :key="index"
                :label="option.texto"
                value=""
              ></v-radio>
            </v-radio-group>
          </v-container>

          <v-container v-if="question.modo_respuesta === 'MULTI_CHOICE'">
            <v-checkbox
              v-for="(option, index) in question.opcion_respuesta"
              :key="index"
              :label="option.texto"
              value="John"
            ></v-checkbox>
          </v-container>
        </v-card-text>
        <!-- <v-card-actions>
          <v-btn
            text
            color="warning"
            v-on:click="editQuestion(question, index)"
          >
            Editar
          </v-btn>
          <v-btn
            text
            color="error"
            v-on:click="deleteQuestion(question, index)"
          >
            eliminar
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
// import _ from 'lodash';
import vueSlider from "vue-slider-component";
import axios from "axios";
export default {
  name: "encuestas",
  data() {
    return {
      selectedQuestion: { id: null },
      radios: true
    };
  },  
  props: ["questions", "readOnly"],
  components: { vueSlider },
  mounted() {
    this.$root.$on("selected-question", (obj) => {
      window.console.log(obj);
      this.selectedQuestion = { id: null };
    });
  },
  computed: {},
  watch: {},
  methods: {
    editQuestion(question, index) {
      this.selectedQuestion = JSON.parse(JSON.stringify(question));
      this.selectedQuestion.questionNumber = index + 1;
    },
    deleteQuestion(question, index) {
      this.questions.splice(index, 1);
    },
    }

};
</script>
