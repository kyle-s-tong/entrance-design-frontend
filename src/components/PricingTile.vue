<template>
  <div class="w-1/2 py-2">
    <div class="bg-white p-4">
      <div class="text-center border border-black p-4 m-4">
        <h3 class="text-2xl">
          {{ pricing.Title }}
        </h3>
      </div>
      <h3 class="text-3xl">
        {{ pricing.Price }}
      </h3>
      <div class="w-full flex">
        <div class="w-1/2 pr-8">
          <img :src="imageUrl" :alt="pricing.title">
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
  },
  computed: {
    imageUrl: function () {
      return `http://localhost:1337${this.pricing.Image.url}`
    }
  }
}
</script>

<style>
  .list-disc ul li {
    list-style: disc;
  }
</style>
