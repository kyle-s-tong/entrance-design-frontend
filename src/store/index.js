import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  state: {
    name: '',
    emailAddress: '',
  },
  mutations: {
    setName(state, payload) {
      state.name = payload.name;
    },
    setEmailAddress(state, payload) {
      state.emailAddress = payload.emailAddress;
    },
  }
});
