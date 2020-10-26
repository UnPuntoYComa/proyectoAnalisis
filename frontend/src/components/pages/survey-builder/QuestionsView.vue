<template>
  <v-row justify="center">
    <draggable
      :list="questions"
      group="questions"
      class="kanban-column"
    >
      <v-col
        cols="12"
        md="12"
        v-for="(question, index) in questions"
        :key="index"
      >
        <div v-if="selectedQuestion.id === question.id">
          <SurveyBuilder :options="selectedQuestion"></SurveyBuilder>
        </div>

        <v-card
          v-if="selectedQuestion.id !== question.id"
          width="100%"
          height="100%"
          elevation="12"
        >
          <div class="question-section">
            <v-card-title>
              <span class="">{{ index + 1 }}</span>-Pregunta
            </v-card-title>
          </div>
          <v-card-subtitle class="body-1">
            {{ question.body }}
          </v-card-subtitle>
          <v-card-text>
            <v-container v-if="question.type === 'BOOLEAN'">
              <v-radio-group v-model="radios" :mandatory="false">
                <v-radio
                  v-for="(option, index) in question.options"
                  :key="index"
                  :label="option.body"
                  value=""
                ></v-radio>
              </v-radio-group>
            </v-container>
            <v-container v-if="question.type === 'TEXT'"
              ><v-text-field outlined />
            </v-container>
            <v-container v-if="question.type === 'SINGLE_CHOICE'">
              <v-radio-group v-model="radios" :mandatory="false">
                <v-radio
                  v-for="(option, index) in question.options"
                  :key="index"
                  :label="option.body"
                  value=""
                ></v-radio>
              </v-radio-group>
            </v-container>

            <v-container v-if="question.type === 'MULTI_CHOICE'">
              <v-checkbox
                v-for="(option, index) in question.options"
                :key="index"
                :label="option.body"
                value="John"
              ></v-checkbox>
            </v-container>
          </v-card-text>
          <v-card-actions>
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
          </v-card-actions>
        </v-card>
      </v-col>
    </draggable>
  </v-row>
</template>

<script>
import draggable from "vuedraggable";
import vueSlider from "vue-slider-component";
import SurveyBuilder from "./SurveyBuilder";
export default {
  name: "QuestionsView",

  props: ["questions", "readOnly"],
  data() {
    return {
      selectedQuestion: { id: null },
      radios: ""
    };
  },
  components: { SurveyBuilder, vueSlider, draggable },
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
  },
};
</script>

<style scoped lang="scss">
.kanban-column {
  min-height: 100px;
  min-width: 50%;
}
$color-primary: #f8f8f8;
$color-secondary: #eaf0f4;
$color-blue: #4c8ce4;
$color-orange: #ff9635;
$color-red: #f06559;
$color-green: #48bf7a;
h1,
h2,
h3 {
  font-weight: 200;
}
.wid300 {
  max-width: 300px !important;
}
.img-style {
  padding-top: 20px;
  height: 300px;
  width: 500px;
  padding-bottom: 20px;
}
.question_body {
  word-break: break-all;
  color: #555;
}
.read-only-question {
  background-color: #fafafa;
}
.icon-style {
  color: #57dd7a;
  font-size: 25px;
  padding-top: 20px;
  background-color: #d6f0de;
  padding: 7px;
  padding-bottom: 3px;
  border-radius: 25px;
}
.font-style {
  color: #57dd7a;
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 30px;
}
.font-style {
  color: #57dd7a;
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 30px;
}
.text-style {
  color: #969090;
  text-align: right;
}
.btn-style {
  margin-top: 10px;
  width: 80px;
  height: 29px;
  margin-bottom: 50px;
}
button {
  cursor: pointer;
}
.custom-btn {
  background: #00baf9;
  color: #fff;
  width: 220px;
}
.pad-top50 {
  padding-top: 50px;
}
.form-control {
  border-radius: 2px;
}
.custom-para {
  padding-bottom: 20px;
  font-size: 20px;
}
.mar-bot20 {
  margin-bottom: 20px;
}
.error-style {
  font-size: 12px;
  color: #ff4848;
  padding-bottom: 5px;
}
.readonly {
  background: #f7f7f7;
}
.btn-disabled {
  color: white;
  background-color: #c6c2c2;
  border: #c6c2c2;
}
.text-color {
  color: #888;
}
.survey-name {
  color: #00baf9;
  font-size: 20px;
}
.pad-left50 {
  padding-left: 50px;
}
.branching_section {
  background-color: #f5f8fa;
  border: solid 1px #d3dfe4;
  padding: 5px 10px;
  .branching_image {
    max-width: 120px;
    max-height: 120px;
    width: 100%;
    border: 1px solid #ccc;
  }
}
.custom-btn-bg {
  background: linear-gradient(to left, #4b6fe6, #00baf9);
  color: #fff;
}
.mar-bot20 {
  margin-bottom: 20px;
}
.pad-left100 {
  padding-left: 100px;
}
.mar-bot0 {
  margin-bottom: 0px !important;
}
.card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 12px;
  margin-bottom: 12px;
}
.question_color,
input {
  color: #555;
  font-size: 16px;
}
p {
  margin: 8px 0;
}
.radio-option {
  margin: 0px;
}
.input-text {
  width: 100%;
  border-radius: 2px;
  outline: none;
  border: 1px solid #ccc;
  height: 35px;
  text-indent: 10px;
}
.DATE-input {
  border-radius: 20px;
  outline: none;
  border: 1px solid #ccc;
  height: 35px;
  text-indent: 10px;
}
.pad-top20 {
  padding-top: 20px;
}
.vertical-vue-slider {
  height: 300px !important;
  width: 4px;
  padding: 11px;
  margin-left: 30px;
}
.horizontal-vue-slider {
  height: 8px;
  width: 100%;
}
.img-size {
  width: 100%;
  height: auto;
  float: none;
  padding: 10px 0 0;
  max-width: 120px;
  max-height: 120px;
}
label {
  font-weight: normal !important;
  word-break: break-all;
  color: #555;
}
.modal-dialog {
  width: 500px !important;
}
.width-90 {
  width: 90% !important;
}
.sb-btn-link {
  border: none;
  background: none;
  padding: 5px;
  color: #f06559;
  font-size: 14px;
  margin-top: 16px;
}
.color-blue {
  color: $color-blue;
}
.color-orange {
  color: $color-orange;
}
.color-red {
  color: $color-red;
}
.color-green {
  color: $color-green;
}
.slidecontainer {
  width: 100%;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}
.slider:hover {
  opacity: 1;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #4caf50;
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4caf50;
  cursor: pointer;
}
</style>