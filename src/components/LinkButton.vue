<template>
  <div>
    <button class="text-white uppercase">
      {{ link.text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    link: Object,
  }
}
</script>
