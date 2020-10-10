<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-3/4 bg-black bg-opacity-25">
      <TheHeaderBar :isCollapsed="true" />
    </div>
    <div class="background">
    </div>
  </div>
</template>

<script>
import TheHeaderBar from '../components/TheHeaderBar';

export default {
  name: 'QuestionnaireResults',
  components: {
    TheHeaderBar
  },
  props: {
    results: Object
  },
  data: function () {
    return {
      pricings: [],
    }
  },
  mounted() {
    console.log(this.results);
  }
}
</script>
