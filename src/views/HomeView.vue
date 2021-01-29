<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-2/3 md:h-9/10 bg-black bg-opacity-25">
      <TheHeaderBar />
    </div>
    <div class="flex flex-col w-full  h-full background">
      <div class="w-full h-full flex flex-col items-center
                justify-center bg-entrance-brown bg-opacity-75"
      >
        <div class="h-1/2 w-2/3 text-entrance-dark-brown flex
                flex-col justify-center items-center brush"
        >
          <h2 class="text-5xl text-center mt-8 tracking-wide">
            Our Process
          </h2>
          <div>
            <p class="highlight text-center text-xl">
              From interiors to renovations to furniture sourcing<br>
              <span class="uppercase">Our passion is creating a home to enhance your living</span>
            </p>
            <p class="pt-8 flex flex-col">
              <span>“Your home should tell the story of who you are,
                and be a collection of what you love.”</span>
              <span class="self-end text-xs">Nate Berkus, The Things That Matter</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full justify-center flex-col background">
      <StepTile v-for="step in steps" :key="step.title" :step="step" />
    </div>
    <!-- <div class="flex w-full justify-center py-8">
      <LinkButton :link="this.pricingButton" />
    </div> -->
    <div class="background flex w-full text-entrance-dark-brown" id="whoweare">
      <div
        class="bg-white bg-opacity-66 pt-16 pb-32 flex flex-col h-full w-full items-center"
      >
        <div class="w-3/4 pb-2">
          <h2 class="text-center md:text-left text-xl md:text-2xl">Who we are</h2>
        </div>
        <div class="flex flex-col md:flex-row w-3/4 justify-center">
          <div class="w-full pt-4 md:pt-0 md:w-1/3">
            <img :src="this.whoWeAreSection.image" class="w-full" alt="Picture of Nicky and Claire">
          </div>
          <div class="w-full pt-4 md:pt-0 md:w-2/3 md:pl-16">
            <h2
              class="text-lg text-center md:text-left md:text-3xl pb-4"
            >
              {{ this.whoWeAreSection.title }}
            </h2>
            <div
              v-html="this.whoWeAreSection.description"
              class="pt-0 lg:pt-2 text-justify text-xs lg:text-sm"
            />
          </div>
        </div>
        <LinkButton :link="this.whoWeAreSection.link" class="pt-6 lg:pt-2" />
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
  data() {
    return {
      steps: stepDetails,
      pricingButton: {
        text: 'View our pricing',
        route: '/pricing',
      },
      whoWeAreSection: whoWeAre,
    };
  },
};
</script>
