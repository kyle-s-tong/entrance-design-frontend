<template>
  <ImageStep :stepData="stepData" />
</template>

<script>
import ImageStep from './ImageStep';

export default {
  name: 'Step7',
  props: {
    stepData: Object
  },
  components: {
    ImageStep,
  },
}
</script>
