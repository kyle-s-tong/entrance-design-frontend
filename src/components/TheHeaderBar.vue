<template>
  <div :class="['flex w-full justify-center h-16 fixed', this.navBarState]">
    <div :class="['flex', this.navCollapsed ? 'w-3/4 lg:w-7/8 xl:w-3/4 justify-between items-center' : 'flex-col items-end w-full px-2 lg:px-0 lg:w-10/12']">
      <HeaderBarLogo :logoClass="'hidden sm:flex w-3/12 xl:w-2/12'" v-if="this.navCollapsed"/>
      <div class="w-full flex xs:flex-col justify-center md:justify-between">
        <HeaderBarLogo :logoClass="'sm:pr-4 hidden sm:flex w-3/12 xl:w-2/12 pt-2'" v-if="!this.navCollapsed" />
        <div :class="['flex', this.navCollapsed ? 'flex-grow justify-end' : 'justify-center md:justify-between lg:pt-6']">
          <HeaderBarLink v-for="link in headerBarLinks" :key="link.text" :link="link" :isCollapsed="navCollapsed" />
        </div>
      </div>
      <HeaderBarLogo :logoClass="'sm:hidden w-10/12 self-center pt-8'" v-if="!this.navCollapsed" />
      <h1 class="pt-4 sm:pt-32 lg:pt-64 pb-4 sm:pb-20 self-center sm:self-end text-center sm:text-right text-md md:text-4xl xl:text-6xl uppercase text-white tracking-wide" v-if="!this.navCollapsed">Interior design on your terms</h1>
      <LinkButton :link="this.questionnaireButton" v-if="!this.navCollapsed" class="self-center sm:self-end" />
      <div class="flex justify-center sm:justify-end sm:w-2/12 w-full py-4" v-if="!this.navCollapsed">
        <a href="https://www.facebook.com/Entrancedesignnz16" class="mx-2">
          <img src="../assets/social/facebook.png" class="icon object-contain" alt="Link to Entrance Design's Facebook page">
        </a>
        <a href="https://www.instagram.com/entrancedesignnz" class="mx-2">
          <img src="../assets/social/instagram.png" class="icon object-contain" alt="Link to Entrance Design's Instagram page">
        </a>
        <a href="https://nz.pinterest.com/entrancedsgn" class="mx-2">
          <img src="../assets/social/pinterest.png" class="icon object-contain" alt="Link to Entrance Design's Pinterest page">
        </a>
      </div>
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
      windowWidth: 0,
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
    },
    sizeAdjustedCollapsePoint: function () {
      if (this.windowWidth < 640) {
        return 10;
      }

      return this.collapsePoint;
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
      } else if (currentScroll > (this.sizeAdjustedCollapsePoint)) {
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
    this.windowWidth = window.innerWidth;
    window.addEventListener('scroll', () => {
      this.scrollDetect(this.scrollHome, this.scrollDown);
    })
  }
}
</script>

<style>
  .icon {
    height: 30px;
  }
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
