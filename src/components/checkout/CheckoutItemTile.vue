<template>
    <div class="flex w-full h-full divide-x items-center border
                rounded border-gray m-1 p-1 bg-white bg-opacity-75">
      <router-link :to="routerLinkUrl" class="w-2/3">
        <div class="flex items-center">
          <div class="bg-white w-3/12 p-4">
            <img class="w-full" v-if="!hasMultipleImages" :src="`${imageBaseUrl}${item.Image.url}`">
            <img v-else :src="`${imageBaseUrl}${item.Images[0].url}`">
          </div>
          <div class="w-1/4 flex justify-center w-9/12 text-center py-2">
            {{ item.Title }}
          </div>
        </div>
      </router-link>
      <div class="w-1/3 h-full flex items-center justify-around">
        <div>
          1 x ${{ item.Price }}
        </div>
        <button
          class="p-2 rounded border border-entrance-gray hover:bg-entrance-gray
                text-black bg-white hover:border-black z-10"
          v-on:click="removeFromCart"
        >
          Remove from cart
        </button>
      </div>
    </div>
</template>

<script>
import getImageUrl from '../../utils/image';

export default {
  name: 'CheckoutItemTile',
  components: {
  },
  props: {
    item: Object,
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
      return typeof this.item.Images !== 'undefined';
    },
    routerLinkUrl() {
      return `/shop/categories/${this.item.ProductCategory.id}/products/${this.item.id}`;
    },
  },
  methods: {
    removeFromCart() {
      console.log(this.item);
    },
  },
};
</script>
