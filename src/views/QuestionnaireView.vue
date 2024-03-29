<template>
  <div class="h-full w-full flex flex-col">
    <div class="flex w-full flex-none justify-center h-1/5 bg-black bg-opacity-25">
      <TheHeaderBar :isCollapsed="true" :lockBarState="true" />
      <RouteTitle :title="'Design Questionnaire'" />
    </div>
    <div class="flex flex-col flex-grow">
      <component
        :is="currentStepComponent"
        :stepData="currentStepData"
        :errors="errors"
        v-if="questionnaire"
      ></component>
      <div class="background">
        <div class="bg-white bg-opacity-90 flex justify-center py-2 md:py-0 md:pb-16">
          <div :class="['flex grid', currentStep > 1 ? 'grid-cols-2 gap-2' : '']">
            <button
              v-if="currentStep > 1"
              v-on:click="goToPreviousStep"
              class="border-2 py-4 px-6 text-lg bg-white border-black"
            >
              Previous
            </button>
            <button
              v-if="currentStep < finalStep"
              v-on:click="goToNextStep"
              class="border-2 py-4 px-6 text-lg bg-white border-black"
            >
              Next
            </button>
            <button
              v-if="currentStep === finalStep"
              v-on:click="submitQuestionnaire"
              class="border-2 py-4 px-6 text-lg bg-white border-black"
            >
              Get result
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';
// TODO: refactor this stuff later since it's not DRY at all
import Step1 from '../components/questionnaire/Step1';
import Step2 from '../components/questionnaire/Step2';
import Step3 from '../components/questionnaire/Step3';
import Step4 from '../components/questionnaire/Step4';
import Step5 from '../components/questionnaire/Step5';
import Step6 from '../components/questionnaire/Step6';
import Step7 from '../components/questionnaire/Step7';

export default {
  name: 'QuestionnaireView',
  components: {
    TheHeaderBar,
    RouteTitle,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
  },
  data() {
    return {
      errors: [],
      questionnaire: null,
      currentStep: 1,
      finalStep: null,
    };
  },
  methods: {
    goToNextStep() {
      const nextStep = this.currentStep + 1;
      if (nextStep > this.finalStep) {
        return;
      }

      if (this.currentStep === 1) {
        const validated = this.validateFirstStep();
        if (validated === false) {
          return;
        }

        this.saveUserDetails();
      }

      this.currentStep = nextStep;
    },
    goToPreviousStep() {
      const previousStep = this.currentStep - 1;
      if (previousStep < 1) {
        return;
      }

      this.currentStep = previousStep;
    },
    validateFirstStep() {
      if (this.$store.getters.getName() && this.$store.getters.getEmailAddress()) {
        return true;
      }

      this.errors = [];

      if (!this.$store.getters.getName()) {
        this.errors.push('Name is required.');
      }
      if (!this.$store.getters.getEmailAddress()) {
        this.errors.push('Email is required.');
      }

      return false;
    },
    saveUserDetails() {
      this.createUser(null, false);
    },
    submitQuestionnaire() {
      // From a state point of view these are full results, but from a questionnaire point of view,
      // they are raw because they are uncalculated, hence the variable name change.
      const rawResults = this.$store.getters.getFullResults();
      const calculatedFinalResult = this.parseQuestionnaireResults(rawResults);
      this.$store.commit('setFinalResult', { calculatedFinalResult });

      this.createUser(calculatedFinalResult);

      this.$router.push({ path: 'questionnaire/results' });
    },
    parseQuestionnaireResults(results) {
      const sumResults = {};

      results.forEach((result) => {
        const { score } = result;
        for (const category in score) {
          if (sumResults[category] !== undefined) {
            sumResults[category] += score[category];
          } else {
            sumResults[category] = score[category];
          }
        }
      });

      const resultValues = Object.values(sumResults);
      const max = Math.max(...resultValues);
      const highestScore = Object.keys(sumResults).find((key) => sumResults[key] === max);

      return highestScore;
    },
    createUser(result, quizCompleted = true) {
      const requestBody = {
        email: this.$store.getters.getEmailAddress(),
        username: this.$store.getters.getEmailAddress(),
        name: this.$store.getters.getName(),
        quizCompleted,
      };

      if (quizCompleted === true) {
        requestBody.questionnaireResult = result;
      }

      if (quizCompleted === false) {
        requestBody.password = Math.random().toString(36).substring(7);
      }

      axios.post(
        `${process.env.VUE_APP_API_HOST}/questionnaire-results`,
        JSON.stringify(requestBody),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
    },
  },
  computed: {
    currentStepComponent() {
      const step = this.currentStep;
      return `Step${step.toString()}`;
    },
    currentStepData() {
      if (!this.questionnaire) {
        return null;
      }

      const filtered = this.questionnaire.filter(
        (question) => question.StepNumber === this.currentStep,
      );
      if (filtered.length === 0) {
        return null;
      }

      return filtered[0];
    },
  },
  async mounted() {
    // TODO: handle errors
    const response = await axios.get(`${process.env.VUE_APP_API_HOST}/questionnaires`);
    this.questionnaire = response.data;
    this.finalStep = response.data.length;
  },
};
</script>
