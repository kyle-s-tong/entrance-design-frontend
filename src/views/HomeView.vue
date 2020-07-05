<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-90 bg-black bg-opacity-25">
      <TheHeaderBar />
    </div>
    <div class="flex w-full justify-center h-90 flex flex-col">
      <StepTile v-for="step in steps" :key="step.title" :step="step" />
    </div>
  </div>
</template>

<script>
import { stepDetails } from '../data/steps';
import TheHeaderBar from '../components/TheHeaderBar';
import StepTile from '../components/StepTile';

export default {
  name: 'HomeView',
  components: {
    TheHeaderBar,
    StepTile,
  },
  data: function () {
    return {
      steps: stepDetails,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
