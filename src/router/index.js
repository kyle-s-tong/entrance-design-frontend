import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '../views/HomeView.vue';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: (to) => {
      if (to.hash) {
        return {
          selector: to.hash
          // , offset: { x: 0, y: 10 }
        }
      }

      return { x: 0, y: 0 }
    },
    routes: [
      { path: '/home', component: HomeView },
      { path: '/', redirect: '/home' },
    ]
  })
}
