<template>
  <div :class="['text-white uppercase py-2 px-3 xl:px-8 sm:py-4 z-50', this.isCollapsed ? 'text-2xs sm:text-xs' : 'text-2xs sm:text-xs xl:text-sm']">
    <div v-if="isExternal">
      <a :href="link.route" target="_blank">{{ link.text }}</a>
    </div>
    <router-link v-else :to="link.route" >{{ link.text }}</router-link>
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
    },
    isExternal: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
