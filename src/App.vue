<template>
  <div id="app" class="w-full h-full flex flex-col items-center background">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  .background {
    background-image: url("./assets/background-image.jpg") ;
    background-size: auto;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
  }

  .placeholder-padding {
    text-indent: 0.25rem;
  }
</style>
