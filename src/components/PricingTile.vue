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
          <img :src="`${this.pricing.Image.url}`" :alt="pricing.title">
        </div>
        <div class="flex flex-col w-1/2">
          <VueShowdown :markdown="pricing.Description" class="list-disc pl-8 text-sm" />
          <LinkButton :link="this.questionnaireButton" :linkType="light" class="pt-8 pl-8" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown';
import LinkButton from './LinkButton';

export default {
  name: 'PricingTile',
  components: {
    VueShowdown,
    LinkButton,
  },
  props: {
    pricing: Object,
  },
  data: function () {
    return {
      questionnaireButton: {
        text: 'Click here to get started',
        route: '/questionnaire',
      },
    }
  }
}
</script>

<style>
  .list-disc ul li {
    list-style: disc;
  }
</style>
