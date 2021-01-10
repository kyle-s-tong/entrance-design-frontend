<template>
  <div class="w-1/2">
    <img :src="imageUrl" class="w-full" alt="Image for step in Entrance Design process">
  </div>
</template>

<script>
export default {
  name: 'StepTileImage',
  props: {
    imageUrl: String,
  },
};
</script>
