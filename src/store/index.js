import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  state: {
    name: '',
    emailAddress: '',
    finalResult: '',
    selectedOptions: [],
    featuresEnabled: {
      shopEnabled: false,
    },
  },
  mutations: {
    setName(state, payload) {
      state.name = payload.name;
    },
    setEmailAddress(state, payload) {
      state.emailAddress = payload.emailAddress;
    },
    addSelectedOption(state, payload) {
      const selectionExists = state.selectedOptions.findIndex(option => option.stepNumber === payload.option.stepNumber);
      if (selectionExists !== -1) {
        state.selectedOptions.splice(selectionExists, 1);
        state.selectedOptions.push(payload.option);
      } else {
        state.selectedOptions.push(payload.option);
      }
    },
    setFinalResult(state, payload) {
      state.finalResult = payload.calculatedFinalResult;
    },
    setFeaturesEnabled(state, payload) {
      const { environment } = payload;

      // Disable features in production
      state.featuresEnabled = {
        shopEnabled: environment !== 'production'
      };
    }
  },
  getters: {
    getSelectedOptionByStep: (state) => (step) => {
      return state.selectedOptions.find(selectedOptions => selectedOptions.stepNumber === step)
    },
    getFullResults: (state) => () => {
      return state.selectedOptions.map((option) => {
        return {
          step: option.stepNumber,
          score: option.CategoryValues['category-map'],
        }
      })
    },
    getFinalResult: (state) => () => {
      return state.finalResult;
    },
    getName: (state) => () => {
      return state.name;
    },
    getEmailAddress: (state) => () => {
      return state.emailAddress;
    },
    getFeaturesEnabled: (state) => () => {
      return state.featuresEnabled;
    }
  },
});
