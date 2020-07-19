<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-1/2 bg-black bg-opacity-25">
      <TheHeaderBar />
      <RouteTitle :title="'Pricing'" />
    </div>
    <div class="flex flex-col">
      <PricingTile v-for="pricing in pricings" :key="pricing.id" :pricing="pricing" />
    </div>
  </div>
</template>

<script>
import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';
import PricingTile from '../components/PricingTile';
import { getAllPricings } from '../queries/pricing';

export default {
  name: 'PricingView',
  components: {
    TheHeaderBar,
    RouteTitle,
    PricingTile,
  },
  data: function () {
    return {
      pricings: [],
    }
  },
  apollo: {
    pricings: {
      query: getAllPricings,
    }
  }
}
</script>
