<template>
  <div class="flex items-center">
    <router-link
      :to="link.route"
      :class="['text-white border border-white', linkStyle ]"
    >
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
    },
  },
  data() {
    return {
      darkLink: 'uppercase p-4 bg-black bg-opacity-25 text-center text-xs md:text-sm xl:text-lg hover:bg-black hover:bg-opacity-75',
      lightLink: 'p-2 xl:p-6 text-xs md:text-sm xl:text-lg hover:bg-black',
      brownLink: 'text-entrance-brown border-entrance-brown hover:bg-white p-2 xl:p-6 text-xs md:text-sm xl:text-lg',
    };
  },
  computed: {
    linkStyle() {
      switch (this.linkType) {
        case 'light':
          return this.lightLink;
        case 'brown':
          return this.brownLink;
        default:
          return this.darkLink;
      }
    },
  },
};
</script>
