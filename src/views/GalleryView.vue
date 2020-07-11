<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-90 bg-black bg-opacity-25">
      <TheHeaderBar />
    </div>
  </div>
</template>

<script>
import TheHeaderBar from '../components/TheHeaderBar';

export default {
  name: 'GalleryView',
  components: {
    TheHeaderBar,
  },
}
</script>
