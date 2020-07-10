<template>
  <div class="w-1/2 bg-entrance-gray bg-opacity-90">
    {{ step.title }}
  </div>
</template>

<script>
export default {
  name: 'StepTileText',
  props: {
    step: Object
  }
}
</script>
