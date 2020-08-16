<template>
  <div class="h-full w-full">
    <div class="flex w-full justify-center h-1/5 bg-black bg-opacity-25">
      <TheHeaderBar :isCollapsed="true" :lockBarState="true" />
      <RouteTitle :title="'Design Questionnaire'" />
    </div>
    <div>
      <component :is="currentStepComponent" :stepData="currentStepData" v-if="questionnaire"></component>
      <div>
        <button v-if="currentStep > 1" v-on:click="goToPreviousStep">
          Previous
        </button>
        <button v-if="currentStep < finalStep" v-on:click="goToNextStep">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';
import Step1 from '../components/questionnaire/Step1';
import Step2 from '../components/questionnaire/Step2';

import axios from 'axios';

export default {
  name: 'QuestionnaireView',
  components: {
    TheHeaderBar,
    RouteTitle,
    Step1,
    Step2,
  },
  data: function () {
    return {
      questionnaire: null,
      currentStep: 1,
      finalStep: null,
    }
  },
  methods: {
    goToNextStep() {
      const nextStep = this.currentStep + 1
      if (nextStep > this.finalStep) {
        return;
      }

      this.currentStep = nextStep;
    },
    goToPreviousStep() {
      const previousStep = this.currentStep - 1;
      if (previousStep < 1) {
        return;
      }

      this.currentStep = previousStep;
    }
  },
  computed: {
    currentStepComponent() {
      const step = this.currentStep;
      return `Step${step.toString()}`;
    },
    currentStepData() {
      if (!this.questionnaire) {
        return;
      }

      const filtered = this.questionnaire.filter((question) => {
        return question.StepNumber === this.currentStep;
      })
      if (filtered.length === 0) {
        return;
      }

      return filtered[0];
    }
  },
  async mounted() {
    // TODO: handle errors
    const response = await axios.get('http://localhost:1337/questionnaires');
    this.questionnaire = response.data;
    this.finalStep = 2;
  },
}
</script>
