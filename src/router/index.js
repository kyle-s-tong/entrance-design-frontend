import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '../views/HomeView.vue';
import GalleryView from '../views/GalleryView.vue';
import GallerySingleView from '../views/GallerySingleView.vue';
import PricingView from '../views/PricingView.vue';
import ContactUsView from '../views/ContactUsView.vue';
import ShopView from '../views/ShopView.vue';
import ShopCategoryView from '../views/ShopCategoryView.vue';
import ProductView from '../views/ProductView.vue';
import QuestionnaireView from '../views/QuestionnaireView.vue';
import QuestionnaireResultsView from '../views/QuestionnaireResultsView.vue';

Vue.use(Router);

export default function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: (to) => {
      if (to.hash) {
        return {
          selector: to.hash,
          // , offset: { x: 0, y: 10 }
        };
      }

      return { x: 0, y: 0 };
    },
    routes: [
      { path: '/', component: HomeView },
      { path: '/gallery', component: GalleryView },
      { path: '/gallery/:id', component: GallerySingleView },
      { path: '/pricing', component: PricingView },
      { path: '/contact-us', component: ContactUsView },
      { path: '/shop', component: ShopView },
      { path: '/shop/categories/:category_id', component: ShopCategoryView },
      { path: '/shop/categories/:category_id/products/:product_id', component: ProductView },
      { path: '/questionnaire', component: QuestionnaireView },
      { path: '/questionnaire/results', component: QuestionnaireResultsView },
      { path: '/home', redirect: '/' },
    ],
  });
}
