<template>
  <v-container>
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
      <v-btn color="orange" text> Guardar </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
import SurveyBuilder from "./SurveyBuilder";
import QuestionsView from "./QuestionsView";
import sampleQuestionObj from "./survey-builder.json";
export default {
  name: "TestSurveyBuilder",
  data() {
    return {
      questionsList: [],
      addQuestion: false,
      array: [],
    };
  },
  mounted() {
    this.$root.$on("add-update-question", (q) => {
      this.updateQuestionsList(q);
    });
  },
  components: { SurveyBuilder, QuestionsView },
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
      window.console.log(question, this.addQuestion, this.questionsList);
    },
    addNewQuestion() {
      this.sampleQuestion = JSON.parse(JSON.stringify(sampleQuestionObj));
      this.addQuestion = true;
    },
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