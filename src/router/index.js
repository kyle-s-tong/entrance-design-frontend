import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '../views/HomeView.vue';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/home', component: HomeView },
      { path: '/', redirect: '/home' },
    ]
  })
}