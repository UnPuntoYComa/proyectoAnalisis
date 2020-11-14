<template>
  <v-container>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
          Crear Encuesta
        </v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          Agregar preguntas
        </v-stepper-step>
  
        <v-divider></v-divider>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-row>
          <v-col>
          <v-text-field
          label="Nombre de la encuesta"
          :rules="rules"
          hide-details="auto"
          v-model="nombreEncuesta"
          ></v-text-field>
          </v-col>
        </v-row>
        <v-textarea
        name="input-7-1"
        label="Descripcion"
        :rules="rules"
        v-model="descripcionEncuesta"
        hint="agregue una pequeña descripcion de su encuesta"
      ></v-textarea>
        <v-switch
        v-model="switch1"
        label="Habilitado"
        ></v-switch>
          <v-btn
          color="primary"
          v-on:click="handleSubmitEncuesta"
        >
          Continuar
        </v-btn>

        <v-btn text>
          Cancelar
        </v-btn>
      </v-stepper-content>
        <v-stepper-content step="2">
    <v-btn color="teal accent-3" large text @click="addNewQuestion()">
      agregar pregunta
    </v-btn>
    <v-row justify="center">
      <QuestionsView :questions="questionsList" :readOnly="false" />
    </v-row>
    <div v-if="addQuestion">
      <SurveyBuilder :options="sampleQuestion" />
    </div>
    <v-card-actions v-if="questionsList.length > 0">
      <v-btn color="orange" text v-on:click="handleSubmitPreguntas"> Guardar </v-btn>
    </v-card-actions>

    <p>{{ questionsList }}</p>
    <!-- snackbar de encuesta guardada exitosamente -->
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      vertical
      elevation="10"
      shaped
      outlined
      color="primary"
    >
      <div class="text-h6">{{ snackText }}</div>
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-stepper-content>
</v-stepper-items>
</v-stepper>
  </v-container>
</template>

<script>
import SurveyBuilder from "./SurveyBuilder";
import QuestionsView from "./QuestionsView";
import sampleQuestionObj from "./survey-builder.json";
import VueJwtDecode from "vue-jwt-decode";
export default {
  name: "TestSurveyBuilder",
  components: { SurveyBuilder, QuestionsView },
  data() {
    return {
      switch1: true,
      rules: [
        value => !!value || 'Required.'],
      e1: 1,
      nombreEncuesta:"",
      id_encuesta:"",
      descripcionEncuesta:"",
      questionsList: [],
      addQuestion: false,
      array: [],
      snackbar: false,
      snackText: "Encuesta guardada exitosamente",
      timeout: 2000,
    };
  },
  mounted() {
    this.$root.$on("add-update-question", (q) => {
      this.updateQuestionsList(q);
    });
  },
  methods: {
    updateQuestionsList(question) {
      const questionIndex = this.questionsList.findIndex(
        (x) => x.id === question.id
      );
      if (questionIndex >= 0) {
        this.questionsList.splice(questionIndex, 1, question);
      } else {
        this.questionsList.push(JSON.parse(JSON.stringify(question)));
      }
      this.addQuestion = false;
      this.$root.$emit("selected-question", null);
      window.console.log(question);
    },
    addNewQuestion() {
      this.sampleQuestion = JSON.parse(JSON.stringify(sampleQuestionObj));
      this.addQuestion = true;
    },
    async handleSubmitEncuesta(){
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      let user = decoded;
      let response = await this.$http.post("/api/encuesta/",{nombre:this.nombreEncuesta,descripcion:this.descripcionEncuesta,estado:this.switch1,user:user.id});
      console.log(response);
      this.id_encuesta=response.data.id_encuesta;
      this.e1 = 2;
    },
    async handleSubmitPreguntas(){
      let response = await this.$http.post("/api/pregunta/",{
        datos:this.questionsList,
        id_encuesta:this.id_encuesta
      })
      if(response.data=="creado exitosamente"){
        console.log(response.data);
      this.snackbar = true;
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add_another_btn {
  font-size: 14px;
  background-color: transparent;
  border-color: #4c8ce4;
  color: #4c8ce4;
  padding: 8px;
  cursor: pointer;
}
.text-center {
  text-align: center;
}
</style>