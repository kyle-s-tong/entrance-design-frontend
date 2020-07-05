<template>
  <div class="text-sm text-white uppercase px-8 py-4">
    <router-link :to="link.route" >{{ link.text }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderBarLink',
  props: {
    link: Object,
  }
}
</script>
