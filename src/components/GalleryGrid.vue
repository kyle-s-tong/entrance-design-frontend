<template>
  <div class="flex w-full px-10 grid grid-cols-1 md:grid-cols-3 gap-2 justify-center">
    <div v-for="gallery in galleries" :key="gallery.Title" class="border-2 border-white relative flex">
      <router-link :to="`/gallery/${gallery.id}`" class="md:flex justify-center w-full" v-on:click.native="refreshGalleryRoute">
        <img v-if="gallery.MainImage && gallery.MainImage.url" :src="`${imageBaseUrl}${gallery.MainImage.url}`" alt="" class="w-full">
        <p class="absolute bottom-0 text-white bg-black bg-opacity-50 my-2 mx-1 p-1">{{ gallery.Title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import getImageUrl from '../utils/image';

export default {
  name: 'GalleryGrid',
  props: {
    galleries: Array
  },
  computed: {
    imageBaseUrl: function () {
      return getImageUrl();
    }
  },
  methods: {
    refreshGalleryRoute: function () {
      this.$router.go();
    }
  }
}
</script>
