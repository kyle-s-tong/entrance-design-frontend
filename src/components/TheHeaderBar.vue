<template>
  <div :class="[isCollapsed ? collapsedNavBar : expandedNavBar]">
    <HeaderBarLogo :logoClass="'hidden'" />
    <div class="w-full flex justify-end">
      <HeaderBarLink v-for="link in headerBarLinks" :key="link.text" :link="link" />
    </div>
    <HeaderBarLogo :logoClass="'py-24'" />
    <LinkButton text="Take our questionnaire" v-if="!this.isCollapsed" />
  </div>
</template>

<script>
import LinkButton from "./LinkButton";
import HeaderBarLink from "./HeaderBarLink";
import HeaderBarLogo from './HeaderBarLogo';

export default {
  name: 'TheHeaderBar',
  components: {
    LinkButton,
    HeaderBarLink,
    HeaderBarLogo,
  },
  data: function () {
    return {
      headerBarLinks: [
        { text: 'Home', route: '/home'},
        { text: 'How it works', route: '/home#howitworks'},
        { text: 'Who we are', route: '/home'},
        { text: 'Gallery', route: '/home'},
        { text: 'Pricing', route: '/home'},
        { text: 'Contact us', route: '/home'},
      ],
      expandedNavBar: 'open flex flex-col items-end w-1/2 fixed',
      collapsedNavBar: 'collapse flex items-end w-1/2 fixed',
      isCollapsed: false,
      scrollState: 500,
    }
  },
  methods: {
    scrollDetect(home, down) {
      // Current scroll position
      const currentScroll = this.scrollTop();
      if (this.scrollTop() === 0) {
        home();
      } else if (currentScroll > (this.scrollState)) {
        down();
      }
    },
    // Returns current scroll position
    scrollTop() {
      return window.scrollY;
    },
    // Called when scroll is in initial position
    scrollHome() {
      this.isCollapsed = false;
    },
    // Called when scrolled down
    scrollDown() {
      this.isCollapsed = true;
    },
  },
  created() {
    window.addEventListener('scroll', () => {
      this.scrollDetect(this.scrollHome, this.scrollDown);
    })
  }
}
</script>

<style>
  /* // Collapse nav bar on scroll down
  .collapse {
    animation: collapse .5s ease forwards;
  }

  // Open nav bar on scroll up
  .open {
    animation: open .5s ease forwards;
  }

  @keyframes collapse {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes open {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  } */
</style>
