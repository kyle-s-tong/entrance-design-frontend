<template>
  <div>
    <router-link :to="link.route" class="text-white uppercase">
      {{ link.text }}
    </router-link>
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
