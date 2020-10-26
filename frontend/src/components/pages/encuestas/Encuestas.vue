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
            {{ question.texto_pregunta }}
          </v-card-title>
        </div>
        <v-card-text>
          <v-container v-if="question.modo_respuesta === 'BOOLEAN'">
            <v-radio-group v-model="respuestas[index]['value'][0]" :mandatory="false">
              <v-radio
                v-for="(option, index) in question.opcion_respuesta"
                :key="index"
                :label="option.texto"
                :value="option.texto"
              ></v-radio>
            </v-radio-group>
          </v-container>
          <v-container v-if="question.modo_respuesta === 'TEXT'"
            ><v-text-field outlined v-model="respuestas[index]['value'][0]"/>
          </v-container>
          <v-container v-if="question.modo_respuesta === 'SINGLE_CHOICE'">
            <v-radio-group v-model="respuestas[index]['value'][0]" :mandatory="false">
              <v-radio
                v-for="(option, index) in question.opcion_respuesta"
                :key="index"
                :label="option.texto"
                :value="option.texto"
              ></v-radio>
            </v-radio-group>
          </v-container>
          <v-container v-if="question.modo_respuesta === 'MULTI_CHOICE'">
            <v-checkbox
            v-for="(option, i) in question.opcion_respuesta"
            v-model="respuestas[index]['value'][i]"
              :key="i"
              :label="option.texto"
              :value="option.texto"        
            ></v-checkbox>
          </v-container>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
    <v-card-actions>
           <v-btn color="primary" v-on:click="handleEnvio" block text x-large> enviar </v-btn>
    </v-card-actions>
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
      respuestas:[],
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
    async handleEnvio(){
      try{
    let res = await this.$http.post("/api/respuestas/",{
      respuestas:this.respuestas,
      })
    res.data.forEach( items=>{
        items.preguntas.sort(function (a, b) {
          if (a.orden > b.orden) {
            return 1;
          }  
        });
      }
      );
      this.encuesta= res.data;
      this.$router.push("/done");
    } catch (e){
        console.log(e);
      }
    }
    },created(){
    this.questions.forEach((pregunta,index)=>{
      this.respuestas.push({value:[],idPregunta:pregunta.id_pregunta})
    });
  }
};
</script>
