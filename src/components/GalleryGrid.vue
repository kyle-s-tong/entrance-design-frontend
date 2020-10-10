<template>
  <div class="flex w-full xl:w-2/3 px-10 grid grid-cols-3 gap-2 justify-center">
    <div v-for="gallery in galleries" :key="gallery.Title" class="border-2 border-white relative flex">
      <router-link :to="`/gallery/${gallery.id}`" class="flex justify-center w-full">
        <img :src="`${imageBaseUrl}${gallery.MainImage.url}`" alt="" class="w-full">
        <p class="absolute bottom-0 text-white bg-black bg-opacity-50 my-2 mx-1 p-1">{{ gallery.Title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'GalleryGrid',
    props: {
      galleries: Array
    },
    computed: {
      imageBaseUrl: function () {
        return process.env.VUE_APP_API_HOST;
      }
    }
}
</script>
