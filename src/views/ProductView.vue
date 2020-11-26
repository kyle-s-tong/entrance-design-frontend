<template>
  <div class="w-full h-full">
      <div  class="flex w-full justify-center h-2/3  md:h-1/5 bg-black bg-opacity-25">
        <TheHeaderBar :isCollapsed="true" />
        <RouteTitle v-if="this.product" :title="product.Title" />
      </div>
      <div v-if="this.loading">
        <LoadingSpinner />
      </div>
      <div v-if="!this.loading && this.product" class="flex h-4/5 justify-center bg-white bg-opacity-50">
        <div class="flex justify-center w-10/12 my-16">
          <div class="w-1/2 p-4 bg-white flex flex-col justify-center object-fit">
            <img :src="`${imageBaseUrl}${product.Images[0].url}`" class="h-full">
          </div>
          <div class="w-1/2 p-4 bg-entrance-background-gray flex flex-col justify-center">
            <div class="h-1/2 mb-16 px-4">
              <div class="text-4xl pt-8 pb-16 uppercase">
                {{ product.Title }}
              </div>
              <div>
                {{ product.Description }}
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

import getImageUrl from '../utils/image';

import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';
import LoadingSpinner from '../components/LoadingSpinner';

export default {
  name: 'ShopView',
  components: {
    TheHeaderBar,
    RouteTitle,
    LoadingSpinner
  },
  data: function () {
    return {
      product: null,
      loading: true,
    }
  },
  computed: {
    imageBaseUrl: function () {
      return getImageUrl();
    },
  },
  async mounted() {
    const response = await axios.get(`${process.env.VUE_APP_API_HOST}/products/${this.$route.params.product_id}`);
    this.product = response.data;
    this.loading = false;
  }
}
</script>
