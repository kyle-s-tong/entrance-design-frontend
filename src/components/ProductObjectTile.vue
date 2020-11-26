<template>
  <router-link :to="routerLinkUrl">
    <div class="flex flex-col items-center">
      <div class="bg-white p-4">
        <img v-if="!hasMultipleImages" :src="`${imageBaseUrl}${object.Image.url}`" alt="">
        <img v-else :src="`${imageBaseUrl}${object.Images[0].url}`">
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
  data: function () {
    return {
    }
  },
  computed: {
    imageBaseUrl: function () {
      return getImageUrl();
    },
    hasMultipleImages: function() {
      return typeof this.object.Images !== 'undefined';
    },
    routerLinkUrl: function() {
      if (this.objectType === 'product') {
        return `/shop/categories/${this.object.ProductCategory}/products/${this.object.id}`;
      } else {
        return `/shop/categories/${this.object.id}`;
      }
    }
  }
}
</script>
