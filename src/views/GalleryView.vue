<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-1/2 bg-black bg-opacity-25">
      <TheHeaderBar />
      <RouteTitle :title="'Gallery'" />
    </div>
    <div class="background">
      <div class="flex flex-col items-center bg-white bg-opacity-50 w-full py-8">
        <div class="flex flex-col justify-center w-full items-center px-10 pb-4">
          <hr class="w-full xl:w-2/3 border-black">
        </div>
        <div class="flex w-full xl:w-2/3 px-10 grid grid-cols-3 gap-2 justify-center">
          <div v-for="gallery in galleries" :key="gallery.Title" class="border-2 border-white relative flex">
            <router-link :to="`/gallery/${gallery.id}`" class="flex justify-center w-full">
              <img :src="`http://localhost:1337${gallery.MainImage.url}`" alt="" class="w-full">
              <p class="absolute bottom-0 text-white bg-black bg-opacity-50 my-2 mx-1 p-1">{{ gallery.Title }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';

export default {
  name: 'GalleryView',
  components: {
    TheHeaderBar,
    RouteTitle,
  },
  data: function () {
    return {
      galleries: [],
    }
  },
  async mounted() {
    // TODO: handle errors
    const response = await axios.get('http://localhost:1337/galleries');
    this.galleries = response.data;
  },
}
</script>
