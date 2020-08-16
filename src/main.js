import Vue from 'vue';
import { createRouter } from './router';
import store from './store';
import App from './App.vue';

import './assets/tailwind.css';

Vue.config.productionTip = false;

const router = createRouter();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
