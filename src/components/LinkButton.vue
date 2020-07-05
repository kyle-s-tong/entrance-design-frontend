<template>
  <div>
    <button class="text-white uppercase">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    text: String,
  }
}
</script>
