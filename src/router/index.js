import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '../views/HomeView';
import GalleryView from '../views/GalleryView';
import GallerySingleView from '../views/GallerySingleView';
import PricingView from '../views/PricingView';
import ContactUsView from '../views/ContactUsView';
import ShopView from '../views/ShopView';
import ShopCategoryView from '../views/ShopCategoryView';
import CheckoutView from '../views/CheckoutView';
import ProductView from '../views/ProductView';
import QuestionnaireView from '../views/QuestionnaireView';
import QuestionnaireResultsView from '../views/QuestionnaireResultsView';

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
      { path: '/gallery/:slug', component: GallerySingleView },
      { path: '/pricing', component: PricingView },
      { path: '/contact-us', component: ContactUsView },
      { path: '/shop', component: ShopView },
      { path: '/shop/categories/:category_slug', component: ShopCategoryView },
      { path: '/shop/categories/:category_slug/products/:product_slug', component: ProductView },
      { path: '/shop/checkout', component: CheckoutView },
      { path: '/questionnaire', component: QuestionnaireView },
      { path: '/questionnaire/results', component: QuestionnaireResultsView },
      { path: '/home', redirect: '/' },
    ],
  });
}
