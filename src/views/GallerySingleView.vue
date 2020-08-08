<template>
    <div class="w-full h-full">
    <div class="flex w-full justify-center h-1/2 bg-black bg-opacity-25">
      <TheHeaderBar />
      <RouteTitle :title="'Gallery'" />
    </div>
    <div class="background">
      <div class="flex flex-col items-center bg-white bg-opacity-75 w-full py-8">
        <div class="flex w-3/4">
          <div class="w-1/2">
          </div>
          <div class="w-1/2">
            <h2>{{ gallery.Title }}</h2>
            <img :src="`http://localhost:1337${gallery.MainImage.url}`" alt="">
            <br>
            <VueShowdown :markdown="gallery.Description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { VueShowdown } from 'vue-showdown';

import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';

export default {
  name: 'GallerySingleView',
  components: {
    TheHeaderBar,
    RouteTitle,
    VueShowdown,
  },
  data: function () {
    return {
      gallery: [],
    }
  },
  async mounted() {
    // TODO: handle errors
    const response = await axios.get(`http://localhost:1337/galleries/${this.$route.params.id}`);
    this.gallery = response.data;
  },
}
</script>
