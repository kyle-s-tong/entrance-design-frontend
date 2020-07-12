<template>
  <div class="self-end w-1/2 text-white">
    <h3 class="text-xl">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'RouteTitle',
  props: {
    title: String,
  },
}
</script>
