<template>
  <div class="flex items-center">
    <router-link :to="link.route" :class="['text-white border border-white', linkType === 'light' ? lightLink : darkLink]">
      {{ link.text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    link: Object,
    linkType: {
      type: String,
      default: 'dark',
    }
  },
  data: function () {
    return {
      darkLink: 'uppercase p-4 text-lg bg-black bg-opacity-25 text-center',
      lightLink: 'p-2 xl:p-6 text-xs md:text-sm xl:text-lg'
    }
  }
}
</script>
