<template>
  <div
    class="flex px-2 md:px-0 justify-center pt-4
          lg:pt-0 w-full md:w-1/2 bg-entrance-gray font-semibold"
  >
    <div class="flex flex-col w-2/3 mb-6 md:justify-center">
      <div class="w-full items-start text-entrance-dark-brown">
        <div class="flex sm:flex-row flex-col">
          <p
            class="text-white text-md md:text-2xl lg:text-6xl md:px-2"
            v-if="step.number"
          >
            {{ step.number }}:
          </p>
          <div class="flex flex-col">
            <p class="text-md md:text-2xl lg:text-3xl uppercase tracking-wide">{{ step.title }}</p>
            <p
              class="text-xs md:text-sm lg:text-base pb-2 leading-relaxed"
            >
              {{ step.description }}
            </p>
            <LinkButton v-if="step.link" :link="step.link" :linkType="'brown'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkButton from './LinkButton';

export default {
  name: 'StepTileText',
  components: {
    LinkButton,
  },
  props: {
    step: Object,
  },
};
</script>
