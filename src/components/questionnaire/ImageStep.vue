<template>
  <div class="w-full h-full background" v-if="stepData">
    <div class="w-full h-full bg-white bg-opacity-90 flex justify-center">
      <div class="w-10/12 md:w-2/3 h-full flex justify-center">
        <div class="flex flex-col h-full pb-6 pt-8">
          <div class="flex flex-col items-center py-4">
            <div class="md:py-6">
              {{ stepData.StepNumber }}
            </div>
            <div v-if="stepData.Title" class="text-center md:text-left">
              {{ stepData.Title }}
            </div>
            <div class="text-center md:text-left w-full py-8">
              <VueShowdown :markdown="stepData.Description" />
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
            <div
              v-for="option in stepData.questionnaire_options"
              :key="option.id"
              class="shadow-lg cursor-pointer"
              v-on:click="selectOption(option)"
            >
              <img
                :src="`${imageBaseUrl}${option.Image.url}`"
                :alt="option.Image.alternativeText"
                :class="[
                  'w-full shadow-lg transform hover:scale-105 duration-100',
                  selectedOption && selectedOption.id === option.id ?
                  'scale-105 border-2 border-green-400' : ''
                  ]"
                >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown';

import getImageUrl from '../../utils/image';

export default {
  name: 'ImageStep',
  props: {
    stepData: Object,
  },
  components: {
    VueShowdown,
  },
  methods: {
    selectOption(option) {
      option.stepNumber = this.stepData.StepNumber;

      this.$store.commit('addSelectedOption', { option });
    },
  },
  computed: {
    imageBaseUrl() {
      return getImageUrl();
    },
    selectedOption() {
      return this.$store.getters.getSelectedOptionByStep(this.stepData.StepNumber);
    },
  },
};
</script>
