<template>
  <div v-if="!step.reverse" class="flex" :id="step.id">
    <StepTileText :step="step" />
    <StepTileImage :imageUrl="step.image" class="hidden md:flex" />
  </div>
  <div v-else class="flex">
    <StepTileImage :imageUrl="step.image" class="hidden md:flex" />
    <StepTileText :step="step" />
  </div>
</template>

<script>
import StepTileImage from './StepTileImage';
import StepTileText from './StepTileText';

export default {
  name: 'StepTile',
  components: {
    StepTileImage,
    StepTileText,
  },
  props: {
    step: Object,
  }
}
</script>
