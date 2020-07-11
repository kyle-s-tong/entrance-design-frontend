<template>
  <div :class="['flex w-full justify-center h-16 fixed', this.navBarState]">
    <div :class="['flex items-end w-1/2', isCollapsed ? 'py-2' : 'flex-col']">
      <HeaderBarLogo :logoClass="'w-2/12'" v-if="this.isCollapsed" />
      <div class="w-full flex justify-end">
        <HeaderBarLink v-for="link in headerBarLinks" :key="link.text" :link="link" />
      </div>
      <HeaderBarLogo :logoClass="'py-24'" v-if="!this.isCollapsed" />
      <LinkButton :link="this.questionnaireButton" v-if="!this.isCollapsed" />
    </div>
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
        { text: 'Who we are', route: '/home#whoweare'},
        { text: 'Gallery', route: '/gallery'},
        { text: 'Pricing', route: '/pricing'},
        { text: 'Contact us', route: '/contact-us'},
      ],
      questionnaireButton: {
        text: 'Take our questionnaire',
        url: '',
      },
      isCollapsed: false,
      collapsePoint: 500,
    }
  },
  computed: {
    navBarState: function () {
      return {
        'bg-black': this.isCollapsed,
        'bg-opacity-50': this.isCollapsed,
        collapse: this.isCollapsed,
        open: !this.isCollapsed
      }
    }
  },
  methods: {
    scrollDetect(home, down) {
      // Current scroll position
      const currentScroll = this.scrollTop();
      if (this.scrollTop() === 0) {
        home();
      } else if (currentScroll > (this.collapsePoint)) {
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
  /* .collapse {
    animation: collapse 1s ease forwards;
  }

  .open {
    animation: open 1s ease forwards;
  }

  @keyframes collapse {
    from {
      @apply bg-transparent flex-col;
    }
    to {
      @apply bg-black flex;
    }
  }

  @keyframes open {
    from {
      @apply bg-black flex;
    }
    to {
      @apply bg-transparent flex-col;
    }
  } */
</style>
