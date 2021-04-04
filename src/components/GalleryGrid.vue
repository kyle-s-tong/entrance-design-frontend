<template>
  <div class="flex w-full px-10 grid grid-cols-1 md:grid-cols-3
              gap-2 justify-center"
  >
    <div
      v-for="gallery in galleries"
      :key="gallery.Title"
      class="border border-white relative flex"
    >
      <router-link
        :to="`/gallery/${gallery.Slug}`"
        class="md:flex justify-center w-full h-full"
        v-on:click.native="refreshGalleryRoute"
      >
        <img
          v-if="gallery.MainImage && gallery.MainImage.url"
          :src="`${gallery.MainImage.url}`"
          :alt="gallery.Title" class="w-full h-full max-h-250px lg:max-h-350px"
        >
        <p class="absolute bottom-0 text-white bg-black bg-opacity-50 my-2 mx-1 p-1">
          {{ gallery.Title }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import getImageUrl from '../utils/image';

export default {
  name: 'GalleryGrid',
  props: {
    galleries: Array,
  },
  computed: {
    imageBaseUrl() {
      return getImageUrl();
    },
  },
  methods: {
    refreshGalleryRoute() {
      this.$router.go();
    },
  },
};
</script>
