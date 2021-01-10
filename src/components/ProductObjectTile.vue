<template>
  <router-link :to="routerLinkUrl">
    <div class="flex flex-col items-center">
      <div class="bg-white p-4">
        <img
          v-if="!hasMultipleImages"
          :src="`${imageBaseUrl}${object.Image.url}`"
          :alt="`Image for ${object.Title}`"
        >
        <img
          v-else
          :src="`${imageBaseUrl}${object.Images[0].url}`"
          :alt="`Image for ${object.Title}`"
        >
      </div>
      <div class="bg-white mt-4 w-3/4 text-center py-2 rounded-lg">
        {{ object.Title }}
      </div>
    </div>
  </router-link>
</template>

<script>
import getImageUrl from '../utils/image';

export default {
  name: 'ProductObjectTile',
  components: {
  },
  props: {
    object: Object,
    objectType: String,
  },
  data() {
    return {
    };
  },
  computed: {
    imageBaseUrl() {
      return getImageUrl();
    },
    hasMultipleImages() {
      return typeof this.object.Images !== 'undefined';
    },
    routerLinkUrl() {
      if (this.objectType === 'product') {
        return `/shop/categories/${this.object.ProductCategory}/products/${this.object.id}`;
      }

      return `/shop/categories/${this.object.id}`;
    },
  },
};
</script>
