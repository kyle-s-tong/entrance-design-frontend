<template>
  <div class="w-full h-full background" v-if="stepData">
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
            <div v-for="image in stepData.Images" :key="image.id" class="shadow-lg cursor-pointer" v-on:click="selectImage(image)">
              <img 
                :src="`${imageBaseUrl}${image.url}`"
                :alt="image.alternativeText" 
                :class="['w-full shadow-lg transform hover:scale-110 duration-100', selectedImage && selectedImage.id === image.id ? 'scale-110' : '']">
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
  name: 'ImageStep',
  props: {
    stepData: Object
  },
  components: {
    VueShowdown,
  },
  methods: {
    selectImage: function (image) {
      image.stepNumber = this.stepData.StepNumber;

      this.$store.commit('addSelectedImage', { image });
    }
  },
  computed: {
    imageBaseUrl: function () {
      return process.env.VUE_APP_API_HOST;
    },
    selectedImage: function () {
      return this.$store.getters.getSelectedImageByStep(this.stepData.StepNumber)
    }
  },
  mounted() {
    console.log(this.stepData);
  }
}
</script>
