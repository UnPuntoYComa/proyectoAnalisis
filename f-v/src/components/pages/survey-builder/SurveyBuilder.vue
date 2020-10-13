<template>
  <v-container>
    <v-row justify="center">
      <v-col md="6">
        <v-card>
          <v-card-title
            ><v-select
            outlined
            color="indigo accent-3"
              v-model="selectedType"
              v-on:change="questionTypeChanged(selectedType)"
              :items="questionTypes"
            >
            </v-select>
          </v-card-title>
          <v-card-text>
            <div class="question-section" v-if="selectedType !== 'DEFAULT'">
              <div class="pb-10">
                <v-text-field
                  label="Pregunta"
                  outlined
                  v-model="question.body"
                />
              </div>
              <v-container v-if="selectedType === 'BOOLEAN'">
                <div class="vsb-choices-text">Answer Choices</div>
                <div
                  class=""
                  v-for="(option, index) in question.options"
                  :key="index"
                >
                  <div class="clear-both">
                    <v-text-field outlined v-model="option.body" />
                    <button
                      class="vsb-btn-link color-red width-10 mt-10"
                      v-on:click="
                        deleteQuestionOptionItem(question.options, index)
                      "
                      v-if="index > 1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </v-container>
              <v-container v-if="selectedType === 'MULTI_CHOICE'">
                <div class="vsb-choices-text">Answer Choices</div>
                <div
                  class=""
                  v-for="(option, index) in question.options"
                  :key="index"
                >
                  <div class="clear-both">
                    <v-row justify="center">
                      <v-col md="8">
                        <v-text-field
                          label="Ingresa tu opcion"
                          outlined
                          v-model="option.body"
                        />
                      </v-col>
                      <v-col md="4"
                        ><v-btn
                          color="error"
                          text
                          v-on:click="
                            deleteQuestionOptionItem(question.options, index)
                          "
                          v-if="index > 1"
                        >
                          remover
                        </v-btn>
                      </v-col>
                    </v-row>
                  </div>
                </div>
                <v-row>
                  <v-btn color="indigo accent-3" text v-on:click="addAnotherAnswer()">
                    agrega otra opcion
                  </v-btn>
                </v-row>
              </v-container>
              <v-container v-if="selectedType === 'SINGLE_CHOICE'">
                <div class="vsb-choices-text">Answer Choices</div>
                <div
                  class=""
                  v-for="(option, index) in question.options"
                  :key="index"
                >
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-text-field
                        outlined
                        label="Ingresa tu opcion"
                        v-model="option.body"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-btn
                        text
                        color="error"
                        v-on:click="
                          deleteQuestionOptionItem(question.options, index)
                        "
                        v-if="index > 1"
                        >remover</v-btn
                      >
                    </v-col>
                  </v-row>
                </div>
                <v-row>
                  <v-btn
                    text
                    color="indigo accent-3"
                    v-on:click="addAnotherAnswer()"
                  >
                    agrega otra opcion
                  </v-btn>
                </v-row>
              </v-container>
              <v-container v-if="selectedType === 'TEXT'">
                <v-checkbox
                  label="limite de caracteres"
                  v-model="question.characterLimited"
                />

                <v-text-field
                  v-model="question.textLimit"
                  label="Limite"
                  outlined
                />
              </v-container>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="warning" @click="saveQuestion(question)">
              guardar
            </v-btn>
            <v-btn text color="error" @click="cancelQuestion(question)">
              cancelar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SurveyBuilder",
  data() {
    return {
      questionTypes: [
        { value: "DEFAULT", text: "- Select a question type -" },
        { value: "BOOLEAN", text: "Yes or No" },
        { value: "MULTI_CHOICE", text: "Multiple Choice" },
        { value: "SINGLE_CHOICE", text: "Single Choice" },
        { value: "TEXT", text: "Text" },
      ],
      question: this.options,
      selectedType: null,
    };
  },
  props: ["options"],
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.question.type = this.question.type ? this.question.type : "DEFAULT";
    this.selectedType = this.question.type;

    window.console.log(this.question, this.selectedType);
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    /**
     * @desc {String} type
     * @param {String} type
     * @return {null}
     */
    questionTypeChanged(type) {
      this.question.type = this.selectedType;
      switch (type) {
        case "BOOLEAN":
          this.question.options = [
            { body: "Yes", sequence: 1 },
            { body: "No", sequence: 2 },
          ];
          break;
        case "SCALE":
          this.question.labels.length = 2;
          break;
        default:
          window.console.log("Question type not matched");
      }
    },

    /**
     * @param {String} format
     * @return {null}
     */
    timeFormatModified(format) {
      window.console.log(format);
    },

    /**
     * @param {null}
     * @return {null}
     */
    addAnotherAnswer() {
      if (!this.question.options) {
        this.question.options = [];
      }
      let maxSequence = Number(
        Math.max(...this.question.options.map((x) => x.sequence))
      );
      if (!maxSequence) {
        maxSequence = this.question.options.length;
      }
      this.question.options.push({
        body: null,
        sequence: maxSequence + 1,
        nextQuestion: null,
        imageUrl: null,
      }); // eslint-disable-line
      this.$forceUpdate();
    },

    /**
     * @param {Object, Number}  options, index
     * @return {null}
     */
    deleteQuestionOptionItem(options, index) {
      this.question.options.splice(index, 1);
    },

    /**
     * @param {null}
     * @return {String} guid
     */
    getGUID() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
    },

    /**
     * @param {Object} question
     * @return {null}
     */
    saveQuestion(question) {
      question.id = question.id ? question.id : this.getGUID(); // eslint-disable-line
      this.$root.$emit("add-update-question", question);
      this.question = { type: "DEFAULT" };
    },

    /**
     * @param {Object} question
     * @return {null}
     */
    cancelQuestion(question) {
      window.console.log(question);
      this.question = { type: "DEFAULT" };
    },

    /**
     * @param {Object} question
     * @return {null}
     */
    deleteQuestion(question) {
      window.console.log(question);
    },

    /**
     * @param {Number} intervals
     * @return {null}
     */
    changeLabelsLength(intervals) {
      this.question.labels.length = intervals;
    },
  },
};
</script>

<style scoped lang="scss">
$color-primary: #f8f8f8;
$color-secondary: #eaf0f4;
$color-blue: #4c8ce4;
$color-orange: #ff9635;
$color-red: #f06559;
$color-green: #48bf7a;

@for $i from 0 through 5 {
  .p-#{$i * 2} {
    padding: #{$i * 2}px !important;
  }
  .pt-#{$i * 2} {
    padding-top: #{$i * 2}px !important;
  }
  .pr-#{$i * 2} {
    padding-right: #{$i * 2}px !important;
  }
  .pb-#{$i * 2} {
    padding-bottom: #{$i * 2}px !important;
  }
  .pl-#{$i * 2} {
    padding-left: #{$i * 2}px !important;
  }
  .m-#{$i * 2} {
    margin: #{$i * 2}px !important;
  }
  .mt-#{$i * 2} {
    margin-top: #{$i * 2}px !important;
  }
  .mr-#{$i * 2} {
    margin-right: #{$i * 2}px !important;
  }
  .mb-#{$i * 2} {
    margin-bottom: #{$i * 2}px !important;
  }
  .ml-#{$i * 2} {
    margin-left: #{$i * 2}px !important;
  }
  .fs-#{$i * 2} {
    font-size: #{$i * 2}px !important;
  }
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

.vue-survey-builder-content {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  border: 1px solid #ddd;
  padding: 10px;
  box-shadow: 1px 1px 5px 0px #ddd;
  background-color: $color-primary;
  border-radius: 2px;
  margin: 12px 0;

  input[type="text"],
  input[type="number"],
  select {
    width: 100%;
    padding: 0 10px;
    height: 38px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-sizing: border-box;
    font-size: 12px;
    background-color: #fff;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-position: right 50%;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);
  }

  button {
    padding: 10px;
    text-align: center;
    font-size: 14px;
    margin: 2px 0;
    cursor: pointer;
    border: 1px solid $color-primary;
  }
  .float-left {
    float: left;
  }
  .float-right {
    float: right;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .width-90 {
    width: 90% !important;
    display: inline-block;
  }
  .width-10 {
    width: 10% !important;
    display: inline-block;
  }
  .display-block {
    display: block;
    clear: both;
  }
  .display-inline-block {
    display: inline-block;
    clear: both;
  }
  .clear-both {
    clear: both;
  }
  .vsb-btn-link {
    border: none;
    background: none;
    padding: 5px;
  }

  .question-section {
    border: 1px solid $color-secondary;
    padding: 10px;
    margin: auto;
  }

  .vsb-block {
    display: block;
    padding: 5px 0;
  }

  .vsb-choices-text {
    font-size: 16px;
  }

  .vsb-select {
    max-width: 200px;
  }
  .char-limit-input {
    max-width: 100px;
  }
  input:disabled,
  textarea:disabled {
    background: $color-primary;
    pointer-events: none;
    cursor: no-drop;
  }
  .buttons-section {
    padding-top: 20px;
    clear: both;
  }
  *:focus {
    outline: none;
  }
  .scale-type {
    .intervals input {
      width: 60px;
    }
  }
}
</style>
