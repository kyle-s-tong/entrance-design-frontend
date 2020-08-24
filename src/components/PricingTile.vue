<template>
  <div class="w-2/3 py-2">
    <div class="bg-white p-4">
      <div class="text-center border border-black p-4 my-2">
        <h3 class="text-2xl">
          {{ pricing.Title }}
        </h3>
      </div>
      <h3 class="text-3xl">
        {{ pricing.Price }}
      </h3>
      <div class="w-full flex">
        <div class="w-1/2 pr-8" v-if="this.pricing.Image">
          <img :src="`${process.env.VUE_APP_API_HOST}${this.pricing.Image.url}`" :alt="pricing.title">
        </div>
        <VueShowdown :markdown="pricing.Description" class="list-disc w-1/2 pl-8 text-sm" />
      </div>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown';

export default {
  name: 'PricingTile',
  components: {
    VueShowdown,
  },
  props: {
    pricing: Object,
  }
}
</script>

<style>
  .list-disc ul li {
    list-style: disc;
  }
</style>
