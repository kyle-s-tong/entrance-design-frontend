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
      shopEnabled: process.env.VUE_APP_SHOP_ENABLED === 'true',
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
    addToCart(state, payload) {
      const { item } = payload;
      state.shoppingCart = [...state.shoppingCart, item];
    },
    removeFromCart(state, payload) {
      const { item } = payload;
      if (state.shoppingCart.includes(item)) {
        const index = state.shoppingCart.indexOf(item);
        state.shoppingCart.splice(index, 1);
      }
    },
    clearCart(state) {
      state.shoppingCart = [];
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
