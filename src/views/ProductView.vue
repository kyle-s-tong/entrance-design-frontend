<template>
  <div class="w-full h-full">
      <div  class="flex w-full justify-center h-2/3  md:h-1/5 bg-black bg-opacity-25">
        <TheHeaderBar :isCollapsed="true" />
        <RouteTitle v-if="this.product" :title="product.Title" />
      </div>
      <div v-if="this.loading" class="flex h-4/5 justify-center items-center">
        <LoadingSpinner />
      </div>
      <div v-if="!this.loading && this.product" class="flex h-4/5 justify-center bg-white bg-opacity-50">
        <div class="flex justify-center w-10/12 my-16">
          <div class="w-1/2 p-4 bg-white flex flex-col justify-center object-fit">
            <img :src="`${imageBaseUrl}${product.Images[0].url}`" class="h-full">
          </div>
          <div class="w-1/2 p-4 bg-entrance-background-gray flex flex-col justify-center">
            <div class="px-4">
              <div class="text-4xl pb-4 uppercase">
                {{ product.Title }}
              </div>
              <div class="pb-16 font-bold">
                ${{ product.Price }}
              </div>
              <VueShowdown :markdown="product.Description" class="text-justify flex-grow" />
              <div class="pt-16 w-1/2">
                <div class="flex w-1/2">
                  <button class="px-1 mr-3" v-on:click="removeAmount">-</button>
                  <input type="text" v-model="amount" class="flex p-1 w-1/2 text-center">
                  <button class="px-1 ml-3" v-on:click="addAmount">+</button>
                </div>
                <button
                  class="p-2 my-2 rounded border border-white self-start hover:bg-entrance-gray text-white uppercase bg-entrance-gray-text"
                  v-on:click="addToCart"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { VueShowdown } from 'vue-showdown';

import getImageUrl from '../utils/image';

import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';
import LoadingSpinner from '../components/LoadingSpinner';

export default {
  name: 'ProductView',
  components: {
    TheHeaderBar,
    RouteTitle,
    LoadingSpinner,
    VueShowdown
  },
  data: function () {
    return {
      product: null,
      loading: true,
      amount: 1
    }
  },
  methods: {
    addToCart() {

    },
    addAmount() {
      ++this.amount;
    },
    removeAmount() {
      if (this.amount > 1) {
        --this.amount;
      }
    },
    handleClickedSlide(direction) {
      const maxLength = this.galleryItem.GalleryImages.length;
      const currentIndex = this.mainGallery.activeIndex;

      if (direction === 'next') {
        if (currentIndex + 1 >= maxLength) {
          this.slideBothGalleriesToIndex(0);
        } else {
          this.slideBothGalleriesToIndex(currentIndex + 1);
        }
      } else {
        if (currentIndex - 1 < 0) {
          this.slideBothGalleriesToIndex(maxLength);
        } else {
          this.slideBothGalleriesToIndex(currentIndex - 1);
        }
      }
    },
    handleClickedThumb(e) {
      const activeThumb = e.activeIndex;
      this.mainGallery.slideTo(activeThumb);
    },
    slideBothGalleriesToIndex(index) {
      this.mainGallery.slideTo(index);
      this.thumbs.slideTo(index);
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
