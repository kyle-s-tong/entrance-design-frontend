<template>
  <div class="flex flex-col items-end w-1/2 fixed">
    <div class="w-full flex justify-end">
      <HeaderBarLink v-for="link in headerBarLinks" :key="link.text" :link="link" />
    </div>
    <div>
      <img src="../assets/entrance-logo-white.png" alt="Entrance Design Logo" class="py-24">
    </div>
    <LinkButton text="Take our questionnaire" />
  </div>
</template>

<script>
import LinkButton from "./LinkButton";
import HeaderBarLink from "./HeaderBarLink";

export default {
  name: 'TheHeaderBar',
  components: {
    LinkButton,
    HeaderBarLink,
  },
  data: function () {
    return {
      headerBarLinks: [
        { text: 'Home', route: '/home'},
        { text: 'How it works', route: '/home'},
        { text: 'Who we are', route: '/home'},
        { text: 'Gallery', route: '/home'},
        { text: 'Pricing', route: '/home'},
        { text: 'Contact us', route: '/home'},
      ]
    }
  }
}
</script>
