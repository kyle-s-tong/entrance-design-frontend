<template>
  <div class="w-full h-full">
      <div  class="flex w-full justify-center h-2/3  md:h-1/5 bg-black bg-opacity-25">
        <TheHeaderBar :isCollapsed="true" />
        <RouteTitle v-if="this.product" :title="product.Title" />
      </div>
      <div v-if="this.loading" class="flex h-4/5 justify-center items-center">
        <LoadingSpinner />
      </div>
      <div
        v-if="!this.loading && this.product"
        class="flex h-4/5 justify-center bg-white bg-opacity-50"
      >
        <div class="flex justify-center w-10/12 my-16">
          <div class="w-1/2 p-4 bg-white flex flex-col justify-center object-fit">
            <div class="flex flex-col w-full h-full">
              <swiper
                class="swiper w-full h-4/5 flex flex-col items-center"
                :options="swiperOptions"
                ref="mainGallery"
              >
                <swiper-slide
                  v-for="image in product.Images"
                  class="flex self-center h-full items-center justify-center object-contain"
                  :key="image.id"
                >
                  <img :src="`${imageBaseUrl}${image.url}`" alt="" class="h-full">
                </swiper-slide>
                <div
                  class="swiper-button-prev text-black"
                  slot="button-prev"
                  v-on:click="handleClickedSlide('previous')"
                ></div>
                <div
                  class="swiper-button-next text-black"
                  slot="button-next"
                  v-on:click="handleClickedSlide('next')"
                ></div>
              </swiper>
              <swiper
                class="swiper w-full h-1/5 box-border my-3"
                :options="swiperOptionThumbs"
                ref="thumbs"
                v-on:click="handleClickedThumb"
              >
                <swiper-slide
                  class="w-2/12 opacity-50 flex justify-center items-center"
                  v-for="image in product.Images"
                  :key="image.id"
                >
                  <img :src="`${imageBaseUrl}${image.url}`" alt="" class="h-full">
                </swiper-slide>
              </swiper>
            </div>
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
              <div class="flex flex-col pt-16 w-full lg:items-center">
                <div class="flex w-1/4">
                  <button class="px-1 mr-3" v-on:click="removeAmount">-</button>
                  <input type="text" v-model="amount" class="flex p-1 w-1/2 text-center">
                  <button class="px-1 ml-3" v-on:click="addAmount">+</button>
                </div>
                <div class="flex w-full justify-between">
                  <button
                    class="p-2 mt-2 rounded border border-white self-start hover:bg-entrance-gray
                          text-white uppercase bg-entrance-gray-text"
                    v-on:click="addToCart"
                  >
                    Add to cart
                  </button>
                  <router-link
                    to="/shop/checkout"
                    v-if="showCheckoutButton"
                    class="p-2 mt-2 rounded border border-white self-start hover:bg-entrance-gray
                          text-white uppercase bg-entrance-gray-text"
                  >
                    Checkout ({{ numberOfItemsInCart }})
                  </router-link>
                </div>
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

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
    VueShowdown,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      product: null,
      loading: true,
      amount: 1,
      thumbs: null,
      mainGallery: null,
      swiperOptions: {
        loop: false,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionThumbs: {
        loop: false,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  methods: {
    addToCart() {
      for (let index = 0; index < this.amount; index += 1) {
        this.$store.commit('addToCart', { item: this.product });
      }
    },
    addAmount() {
      this.amount += 1;
    },
    removeAmount() {
      if (this.amount > 1) {
        this.amount -= 1;
      }
    },
    handleClickedSlide(direction) {
      const maxLength = this.product.Images.length;
      const currentIndex = this.mainGallery.activeIndex;

      if (direction === 'next') {
        if (currentIndex + 1 >= maxLength) {
          this.slideBothGalleriesToIndex(0);
        } else {
          this.slideBothGalleriesToIndex(currentIndex + 1);
        }
      } else if (currentIndex - 1 < 0) {
        this.slideBothGalleriesToIndex(maxLength);
      } else {
        this.slideBothGalleriesToIndex(currentIndex - 1);
      }
    },
    handleClickedThumb(e) {
      const activeThumb = e.activeIndex;
      this.mainGallery.slideTo(activeThumb);
    },
    slideBothGalleriesToIndex(index) {
      this.mainGallery.slideTo(index);
      this.thumbs.slideTo(index);
    },
  },
  computed: {
    imageBaseUrl() {
      return getImageUrl();
    },
    showCheckoutButton() {
      if (this.$store.getters.getNumberOfItemsInCart() > 0) {
        return true;
      }

      return false;
    },
    numberOfItemsInCart() {
      return this.$store.getters.getNumberOfItemsInCart();
    },
  },
  async mounted() {
    const response = await axios.get(`${process.env.VUE_APP_API_HOST}/products/${this.$route.params.product_id}`);
    this.product = response.data;
    this.loading = false;

    await this.$nextTick;
    const mainGallerySwiper = this.$refs.mainGallery.$swiper;
    const thumbSwiper = this.$refs.thumbs.$swiper;

    this.thumbs = thumbSwiper;
    this.mainGallery = mainGallerySwiper;
  },
};
</script>
