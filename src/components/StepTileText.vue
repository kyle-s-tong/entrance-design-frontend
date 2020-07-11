<template>
  <div class="flex justify-center w-1/2 bg-entrance-gray bg-opacity-90">
    <div class="flex flex-col w-2/3 justify-center">
      <div class="w-full h-1/2 items-start">
        <p>{{ step.title }}</p>
        <p>{{ step.description }}</p>
        <LinkButton :link="step.link" />
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
