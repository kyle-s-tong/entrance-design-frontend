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
    shoppingCart: [],
  },
  mutations: {
    setName(state, payload) {
      state.name = payload.name;
    },
    setEmailAddress(state, payload) {
      state.emailAddress = payload.emailAddress;
    },
    addSelectedOption(state, payload) {
      const selectionExists = state.selectedOptions.findIndex(
        (option) => option.stepNumber === payload.option.stepNumber,
      );
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
        shopEnabled: environment !== 'production',
      };
    },
    addToCart(state, payload) {
      const { item } = payload;
      state.shoppingCart = [...state.shoppingCart, item];
    },
  },
  getters: {
    getSelectedOptionByStep: (state) => (step) => state.selectedOptions.find(
      (selectedOptions) => selectedOptions.stepNumber === step,
    ),
    getFullResults: (state) => () => state.selectedOptions.map((option) => ({
      step: option.stepNumber,
      score: option.CategoryValues['category-map'],
    })),
    getFinalResult: (state) => () => state.finalResult,
    getName: (state) => () => state.name,
    getEmailAddress: (state) => () => state.emailAddress,
    getFeaturesEnabled: (state) => () => state.featuresEnabled,
    getShoppingCart: (state) => () => state.shoppingCart,
    getNumberOfItemsInCart: (state) => () => state.shoppingCart.length,
  },
});
