<template>
  <div class="self-end w-1/2 text-white">
    <h3 class="text-xl">{{ pricing.title }}</h3>
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
