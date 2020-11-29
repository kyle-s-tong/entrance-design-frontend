<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-1/5 bg-black bg-opacity-25">
      <TheHeaderBar :lockBarState="true" :isCollapsed="true" />
      <RouteTitle :title="'Checkout'" />
    </div>
    <div class="flex justify-center w-full h-4/5 bg-white bg-opacity-75">
      <div class="w-2/3 flex flex-col items-center">
        <div class="flex flex-col items-center h-4/5 text-center  sm:mt-0 sm:ml-4 sm:text-left">
          <div class="pt-8">
            <p class="text-lg text-black">
              Please review the items in your cart and then proceed to checkout:
            </p>
          </div>
          <div class="h-full w-3/4 self-center items-center overflow-y-auto grid grid-cols-1 gap-1">
            <CheckoutItemTile v-for="(item, index) in itemsInCart" :key="index" :item="item" />
          </div>
        </div>
        <button
          type="button"
          class="p-2 mt-16 rounded border border-white self-end hover:bg-entrance-gray
                text-white uppercase bg-entrance-gray-text"
        >
          Proceed
        </button>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      </div>
    </div>
  </div>
</template>

<script>
import getImageUrl from '../utils/image';

import CheckoutItemTile from '../components/checkout/CheckoutItemTile';
import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';

export default {
  name: 'CheckoutView',
  props: {
    close: Function,
  },
  components: {
    CheckoutItemTile,
    TheHeaderBar,
    RouteTitle,
  },
  computed: {
    imageBaseUrl() {
      return getImageUrl();
    },
    itemsInCart() {
      return this.$store.getters.getShoppingCart();
    },
  },
  methods: {
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      if (component.$store.getters.getNumberOfItemsInCart() < 1) {
        component.$router.push('/shop');
      }
    });
  },
};
</script>
