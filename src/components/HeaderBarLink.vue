<template>
  <div :class="['text-white uppercase px-3 xl:px-8 py-4', this.isCollapsed ? 'text-xs' : 'text-xs xl:text-sm']">
    <router-link :to="link.route" >{{ link.text }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderBarLink',
  props: {
    link: Object,
    isCollapsed: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
