<template>
  <div :class="logoClass">
    <img class="object-contain" :src="logoType" alt="Entrance Design Logo" >
  </div>
</template>

<script>
const blackImage = require('../assets/entrance-logo-black.png');
const whiteImage = require('../assets/entrance-logo-white.png');

export default {
  name: 'HeaderBarLogo',
  props: {
    logoClass: String,
    logoColour: {
      type: String,
      default: 'white',
    },
  },
  computed: {
    logoType() {
      switch (this.logoColour) {
        case 'black':
          return blackImage;
        default:
          return whiteImage;
      }
    },
  },
};
</script>
