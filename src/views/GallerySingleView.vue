<template>
    <div class="w-full h-full">
    <div class="flex w-full justify-center h-1/2 bg-black bg-opacity-25">
      <TheHeaderBar />
      <RouteTitle :title="'Gallery'" />
    </div>
    <div class="background" v-if="this.galleryItem">
      <div class="flex flex-col items-center bg-white bg-opacity-75 w-full py-8">
        <div class="flex w-1/2 pb-10">
          <div class="flex flex-col w-1/2">
            <swiper class="swiper w-full h-4/5" :options="swiperOptions" ref="mainGallery">
              <swiper-slide v-for="image in galleryItem.GalleryImages" :key="image.id">
                <img :src="`http://localhost:1337${image.url}`" alt="">
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev" v-on:click="handleClickedSlide('previous')"></div>
              <div class="swiper-button-next" slot="button-next" v-on:click="handleClickedSlide('next')"></div>
            </swiper>
            <swiper class="swiper w-full h-1/5 box-border p-3" :options="swiperOptionThumbs" ref="thumbs" v-on:click="handleClickedThumb">
              <swiper-slide class="w-1/4 opacity-50" v-for="image in galleryItem.GalleryImages" :key="image.id">
                <img :src="`http://localhost:1337${image.url}`" alt="">
              </swiper-slide>
            </swiper>
          </div>
          <div class="w-1/2">
            <h2>{{ galleryItem.Title }}</h2>
            <img :src="`http://localhost:1337${galleryItem.MainImage.url}`" alt="">
            <br>
            <VueShowdown :markdown="galleryItem.Description" />
          </div>
        </div>
        <div class="flex flex-col w-1/2 py-4">
          <div class="flex flex-col justify-center w-full items-center px-10 pb-4">
            <hr class="w-full border-black">
          </div>
          <div class="flex w-3/4 pb-16">
            <GalleryGrid :galleries="galleries" />
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

import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';
import GalleryGrid from '../components/GalleryGrid';

export default {
  name: 'GallerySingleView',
  components: {
    TheHeaderBar,
    RouteTitle,
    VueShowdown,
    Swiper,
    SwiperSlide,
    GalleryGrid,
  },
  data: function () {
    return {
      galleries: [],
      galleryItem: null,
      thumbs: null,
      mainGallery: null,
      swiperOptions: {
        loop: false,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      },
      swiperOptionThumbs: {
        loop: false,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
    }
  },
  methods: {
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
  async mounted() {
    // TODO: handle errors
    const galleryItem = await axios.get(`http://localhost:1337/galleries/${this.$route.params.id}`);
    const galleries = await axios.get(`http://localhost:1337/galleries`)
    this.galleryItem = galleryItem.data;
    this.galleries = galleries.data;

    await this.$nextTick;
    const mainGallerySwiper = this.$refs.mainGallery.$swiper;
    const thumbSwiper = this.$refs.thumbs.$swiper;

    this.thumbs = thumbSwiper;
    this.mainGallery = mainGallerySwiper;
  },
}
</script>

<style>
  .swiper-wrapper .swiper-slide-active {
        opacity: 1;
      }
</style>
