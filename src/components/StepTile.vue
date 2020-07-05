<template>
  <div class="h-full">
    {{ step.title }}
  </div>
</template>

<script>
export default {
  name: 'StepTile',
  props: {
    step: Object,
  }
}
</script>
