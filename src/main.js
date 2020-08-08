import Vue from 'vue';
import { createRouter } from './router';
import App from './App.vue';

import './assets/tailwind.css';

Vue.config.productionTip = false;

const router = createRouter();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
