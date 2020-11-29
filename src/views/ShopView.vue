<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-2/3 md:h-1/5 bg-black bg-opacity-25">
      <TheHeaderBar :isCollapsed="true" />
      <RouteTitle :title="'Shop'" />
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="py-32 w-2/3">
        <div class="flex flex-col md:flex-row grid grid-cols-1
                    md:grid-cols-4 gap-4 items-center w-full"
        >
          <ProductObjectTile v-for="category in categories" :key="category.id" :object="category" />
        </div>
      </div>
      <div v-if="showCheckoutButton" class="flex justify-center w-2/3">
        <button
          class="p-2 my-2 rounded border border-white self-start hover:bg-entrance-gray
                 text-white uppercase bg-entrance-gray-text"
        >
          You have items in your cart. Click here to checkout.
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import ProductObjectTile from '../components/ProductObjectTile';
import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';

export default {
  name: 'ShopView',
  components: {
    TheHeaderBar,
    RouteTitle,
    ProductObjectTile,
  },
  data() {
    return {
      categories: [],
      showCheckoutButton: false,
    };
  },
  async mounted() {
    const response = await axios.get(`${process.env.VUE_APP_API_HOST}/product-categories`);
    this.categories = response.data;

    if (this.$store.getters.getNumberOfItemsInCart() > 0) {
      this.showCheckoutButton = true;
    }
  },
};
</script>
