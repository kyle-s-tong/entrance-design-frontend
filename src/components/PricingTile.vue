<template>
  <div class="w-10/12 md:w-2/3 py-2 flex flex-col">
    <div class="bg-white p-4 flex flex-col">
      <div class="text-center border border-black p-4 my-2">
        <h3 class="text-2xl">
          {{ pricing.Title }}
        </h3>
      </div>
      <h3 class="text-xl text-center lg:text-left md:text-3xl">
        {{ pricing.Price }}
      </h3>
      <div class="w-full flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2 lg:pr-8" v-if="this.pricing.Image">
          <img :src="`${imageBaseUrl}${this.pricing.Image.url}`" :alt="pricing.title">
        </div>
        <div class="flex flex-col w-full lg:w-1/2">
          <VueShowdown :markdown="pricing.Description" class="list-disc pl-2 lg:pl-8 text-xs pt-2 lg:pt-0 md:text-sm" />
          <LinkButton :link="this.questionnaireButton" :linkType="light" class="pt-8 pl-2 md:pl-8" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown';
import LinkButton from './LinkButton';
import getImageUrl from '../utils/image';

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
  },
  computed: {
    imageBaseUrl: function () {
      return getImageUrl();
    }
  }
}
</script>

<style>
  .list-disc ul li {
    list-style: disc;
  }
</style>
