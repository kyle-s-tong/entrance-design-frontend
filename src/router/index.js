import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '../views/HomeView.vue';
import GalleryView from '../views/GalleryView.vue';
import GallerySingleView from '../views/GallerySingleView.vue';
import PricingView from '../views/PricingView.vue';
import ContactUsView from '../views/ContactUsView.vue';
import QuestionnaireView from '../views/QuestionnaireView.vue';

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
      { path: '/', component: HomeView },
      { path: '/gallery', component: GalleryView },
      { path: '/gallery/:id', component: GallerySingleView },
      { path: '/pricing', component: PricingView },
      { path: '/contact-us', component: ContactUsView },
      { path: '/questionnaire', component: QuestionnaireView },
      { path: '/home', redirect: '/' },
    ]
  })
}
