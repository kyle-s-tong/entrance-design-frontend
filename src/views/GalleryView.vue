<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-1/2 bg-black bg-opacity-25">
      <TheHeaderBar />
      <RouteTitle :title="'Gallery'" />
    </div>
  </div>
</template>

<script>
import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';

export default {
  name: 'GalleryView',
  components: {
    TheHeaderBar,
    RouteTitle,
  },
}
</script>
