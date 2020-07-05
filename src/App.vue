<template>
  <div id="app" class="w-full h-full flex flex-col items-center bg-fixed">
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
  #app {
    background-image: url("./assets/background-image.jpg") ;
    background-size: cover;
    background-repeat: no-repeat;
  }

  html, body {
    height: 100%;
    width: 100%;
  }
</style>
