<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-2/3 md:h-3/4 bg-black bg-opacity-25">
      <TheHeaderBar />
      <RouteTitle :title="'Gallery'" />
    </div>
    <div class="background">
      <div class="flex flex-col items-center bg-white bg-opacity-50 w-full py-8">
        <div class="flex flex-col justify-center w-full items-center pb-4">
          <hr class="w-full xl:w-2/3 border-black">
        </div>
        <GalleryGrid :galleries="galleries" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';
import GalleryGrid from '../components/GalleryGrid';

export default {
  name: 'GalleryView',
  components: {
    TheHeaderBar,
    RouteTitle,
    GalleryGrid,
  },
  data: function () {
    return {
      galleries: [],
    }
  },
  async mounted() {
    // TODO: handle errors
    const response = await axios.get(`${process.env.VUE_APP_API_HOST}/galleries`);
    this.galleries = response.data;
  },
}
</script>
