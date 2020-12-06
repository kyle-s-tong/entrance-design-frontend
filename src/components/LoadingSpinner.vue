<template>
  <div v-bind:class="className">
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    color: String,
  },
  data() {
    return {
    };
  },
  computed: {
    className() {
      if (this.color === 'black') {
        return 'loader-black';
      }

      return 'loader';
    },
  },
};
</script>

<style scoped>
  .loader,
  .loader-black,
  .loader:after,
  .loader-black:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .loader {
    margin: 2px auto;
    font-size: 4px;
    position: relative;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load 1.1s infinite linear;
    animation: load 1.1s infinite linear;
  }
  .loader-black {
    margin: 2px auto;
    font-size: 4px;
    position: relative;
    border-top: 1.1em solid rgba(0, 0, 0, 0.2);
    border-right: 1.1em solid rgba(0, 0, 0, 0.2);
    border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);
    border-left: 1.1em solid #000000;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load 1.1s infinite linear;
    animation: load 1.1s infinite linear;
  }

  @-webkit-keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
