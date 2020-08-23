<template>
  <div class="flex justify-center w-1/2 bg-entrance-gray bg-opacity-90">
    <div class="flex flex-col w-2/3 mb-6 justify-center">
      <div class="w-full items-start text-entrance-gray-text">
        <div class="flex">
          <p class="text-white text-6xl px-2" v-if="step.number" >{{ step.number }}:</p>
          <div class="flex flex-col">
            <p class="text-3xl uppercase">{{ step.title }}</p>
            <p class="text-sm">{{ step.description }}</p>
            <LinkButton v-if="step.link" :link="step.link" />
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
    step: Object
  },
}
</script>
