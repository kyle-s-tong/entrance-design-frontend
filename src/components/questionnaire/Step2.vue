<template>
  <div class="w-full h-full background">
    <div class="w-full h-full bg-white bg-opacity-90 flex justify-center">
      <div class="w-2/3 h-full flex justify-center">
        <div class="flex flex-col h-full pb-6 pt-8">
          <div class="flex flex-col items-center py-4">
            <div class="py-6">
              {{ stepData.StepNumber }}
            </div>
            <div v-if="stepData.Title">
              {{ stepData.Title }}
            </div>
            <div class="text-left w-full py-8">
              <VueShowdown :markdown="stepData.Description" />
            </div>
          </div>
          <div class="grid grid-cols-3 gap-6">
            <div v-for="image in stepData.Images" :key="image.id" class="shadow-lg cursor-pointer">
              <img :src="`${imageBaseUrl}${image.url}`" alt="" class="w-full shadow-lg transform hover:scale-110 duration-100">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown';

export default {
  name: 'Step2',
  props: {
    stepData: Object
  },
  components: {
    VueShowdown,
  },
  computed: {
    imageBaseUrl: function () {
      return process.env.VUE_APP_API_HOST;
    }
  },
  mounted() {
    console.log(this.stepData);
  }
}
</script>
