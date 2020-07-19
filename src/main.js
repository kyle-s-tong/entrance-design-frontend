import Vue from 'vue';
import { createRouter } from './router';
import App from './App.vue';
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import './assets/tailwind.css';

Vue.config.productionTip = false;

Vue.use(VueApollo);


const link = new HttpLink({
  // TODO: parameterise
  uri: 'http://localhost:3000/admin/api',
  fetch,
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  })
});

const apolloProvider = new VueApollo({
  defaultClient: client,
})

const router = createRouter();

new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
