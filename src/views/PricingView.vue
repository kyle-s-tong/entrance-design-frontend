<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-2/3 md:h-3/4 bg-black bg-opacity-25">
      <TheHeaderBar />
      <RouteTitle :title="'Pricing'" />
    </div>
    <div class="background">
      <div class="flex flex-col items-center bg-white bg-opacity-50 w-full">
        <div class="flex w-2/3 flex-col p-8 bg-white m-4">
          <h2 class="text-center text-xl md:text-4xl">The easiest way to interior decorate your home</h2>
          <p class="px-2 md:px-16 md:pb-8 pt-4 text-sm">
            You have a home. You want it to look great. So do we! Using the magic of the web, we will
            interior decorate your home completely online. No appointments. No hassles or
            frustrations. Just fast, professional e-decorating services, tailored to your space.
            We can do as little or as much as your budget allows. Never fear, we also offer in-home
            services as found in the packages below.</p>
        </div>
        <div class="bg-black bg-opacity-25 w-2/3 text-center text-white border border-white p-4 m-4">
          <h3 class="text-2xl">
            Interior Design Packages
          </h3>
        </div>
        <PricingTile v-for="pricing in pricings" :key="pricing.id" :pricing="pricing" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';
import PricingTile from '../components/PricingTile';

export default {
  name: 'PricingView',
  components: {
    TheHeaderBar,
    RouteTitle,
    PricingTile,
  },
  data() {
    return {
      pricings: [],
    };
  },
  async mounted() {
    const response = await axios.get(`${process.env.VUE_APP_API_HOST}/pricings`);
    this.pricings = response.data;
  },
};
</script>
