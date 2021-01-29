<template>
  <div class="w-full h-full">
    <div
      v-if="this.category"
      class="flex w-full justify-center h-2/3 md:h-1/5 bg-black bg-opacity-25"
    >
      <TheHeaderBar :isCollapsed="true" :lockBarState="true"  />
      <RouteTitle :title="category.Title" />
    </div>
    <div class="flex justify-center background">
      <div class="py-32 w-2/3">
        <div
          class="flex flex-col md:flex-row grid
                grid-cols-1 md:grid-cols-4 gap-4
                items-center w-full"
        >
          <ProductObjectTile
            v-for="product in products"
            :key="product.id"
            :object="product"
            :objectType="'product'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';
import ProductObjectTile from '../components/ProductObjectTile';

export default {
  name: 'ShopView',
  components: {
    TheHeaderBar,
    RouteTitle,
    ProductObjectTile,
  },
  data() {
    return {
      category: null,
      products: [],
    };
  },
  async mounted() {
    const response = await axios.get(`${process.env.VUE_APP_API_HOST}/product-categories/${this.$route.params.category_id}`);
    this.category = response.data;
    this.products = this.category.Products;
  },
};
</script>
