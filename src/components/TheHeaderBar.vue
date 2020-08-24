<template>
  <div :class="['flex w-full justify-center h-16 fixed', this.navBarState]">
    <div :class="['flex', this.navCollapsed ? 'py-2 w-3/4 items-center' : 'flex-col items-end w-3/4']">
      <HeaderBarLogo :logoClass="'w-2/12'" v-if="this.navCollapsed" />
      <div class="w-full flex justify-end">
        <HeaderBarLink v-for="link in headerBarLinks" :key="link.text" :link="link" :isCollapsed="navCollapsed" />
      </div>
      <HeaderBarLogo :logoClass="'py-24'" v-if="!this.navCollapsed" />
      <LinkButton :link="this.questionnaireButton" v-if="!this.navCollapsed" />
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
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
    lockBarState: {
      type: Boolean,
      default: false,
    },
    collapsePoint: {
      type: Number,
      default: 300,
    }
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
        route: '/questionnaire',
      },
      navCollapsed: this.isCollapsed,
    }
  },
  computed: {
    navBarState: function () {
      return {
        'bg-black': this.navCollapsed,
        'bg-opacity-50': this.navCollapsed,
        collapse: this.navCollapsed,
        open: !this.navCollapsed
      }
    }
  },
  methods: {
    scrollDetect(home, down) {
      if (this.lockBarState === true) {
        return;
      }
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
      this.navCollapsed = false;
    },
    // Called when scrolled down
    scrollDown() {
      this.navCollapsed = true;
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
