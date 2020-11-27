<template>
  <div class="self-end w-2/3 text-white">
    <h1 class="text-4xl text-center md:text-left">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'RouteTitle',
  props: {
    title: String,
  },
};
</script>
