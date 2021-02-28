<template>
  <div id="app" class="w-full h-full flex flex-col items-center background">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
  .background {
    background-image: url("./assets/background-image.webp") ;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .highlight:hover {
    background: url("./assets/brush.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 90% 90%;
    background-position: 100% 75%;
    color: black;
  }

  .brush {
    background: url("./assets/brush.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-size: 90% 90%;
    background-position: 100% 200%;
    color: black;
  }

  .brush-large {
    background: url("./assets/brush.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-size: 90% 90%;
    background-position: 100% 200%;
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
