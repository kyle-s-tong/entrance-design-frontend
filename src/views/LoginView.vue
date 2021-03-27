<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-2/3 md:h-1/5 bg-black bg-opacity-25">
      <TheHeaderBar :isCollapsed="true" :lockBarState="true" />
      <RouteTitle :title="'Log in'" />
    </div>
    <div class="background">
    </div>
  </div>
</template>

<script>
import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';

export default {
  name: 'LoginView',
  components: {
    TheHeaderBar,
    RouteTitle,
  },
};
</script>
