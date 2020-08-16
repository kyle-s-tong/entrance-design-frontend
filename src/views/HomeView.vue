<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-90 bg-black bg-opacity-25">
      <TheHeaderBar />
    </div>
    <div class="flex w-full justify-center flex-col background">
      <StepTile v-for="step in steps" :key="step.title" :step="step" />
    </div>
    <div class="flex w-full justify-center background py-8">
      <LinkButton :link="this.pricingButton" />
    </div>
    <div class="flex w-full pt-16 pb-32" id="whoweare">
      <div class="flex flex-col w-full items-center">
        <!-- TODO: header instead of p tag -->
        <div class="w-1/2 pb-2">
          <p class="text-left">Who we are</p>
        </div>
        <div class="flex w-1/2 justify-center">
          <div class="w-1/3">
            <img :src="this.whoWeAreSection.image" class="w-full">
          </div>
          <div class="w-2/3 pl-16">
            <!-- TODO: header instead of p tag -->
            <p>{{ this.whoWeAreSection.title }}</p>
            <div v-html="this.whoWeAreSection.description" class="pt-2 text-justify text-sm" />
          </div>
        </div>
        <LinkButton :link="this.whoWeAreSection.link" class="my-8 p-2 bg-entrance-gray" />
      </div>
    </div>
  </div>
</template>

<script>
import { stepDetails } from '../data/steps';
import { whoWeAre } from '../data/who-we-are';
import TheHeaderBar from '../components/TheHeaderBar';
import StepTile from '../components/StepTile';
import LinkButton from '../components/LinkButton';

export default {
  name: 'HomeView',
  components: {
    TheHeaderBar,
    StepTile,
    LinkButton,
  },
  data: function () {
    return {
      steps: stepDetails,
      pricingButton: {
        text: 'View our pricing',
        route: '/pricing',
      },
      whoWeAreSection: whoWeAre,
    }
  }
}
</script>

<style scoped>
</style>
