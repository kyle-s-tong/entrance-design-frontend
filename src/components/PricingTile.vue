<template>
  <div class="w-1/2 py-2">
    <div class="bg-white p-4">
      <div class="text-center border border-black p-4 m-4">
        <h3 class="text-2xl">
          {{ pricing.title }}
        </h3>
      </div>
      <h3 class="text-3xl">
        {{ pricing.price }}
      </h3>
      <div class="w-full flex">
        <div class="w-1/2 pr-8">
          <img :src="pricing.image.publicUrl" :alt="pricing.title">
        </div>
        <div v-html="pricing.description" class="list-disc w-1/2 pl-8 text-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingTile',
  props: {
    pricing: Object,
  },
}
</script>
