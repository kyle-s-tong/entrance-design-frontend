<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-2/3 md:h-3/4 bg-black bg-opacity-25">
      <TheHeaderBar />
      <RouteTitle :title="'Shop'" />
    </div>
    <div class="background">
      <div class="flex flex-col items-center bg-white bg-opacity-50 w-full">
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';

export default {
  name: 'ShopView',
  components: {
    TheHeaderBar,
    RouteTitle,
  },
  data: function () {
    return {
    }
  },
  async mounted() {
  }
}
</script>
