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
            <div v-for="option in stepData.questionnaire_options" :key="option.id" class="shadow-lg cursor-pointer" v-on:click="selectOption(option)">
              <img
                :src="`${option.Image.url}`"
                :alt="option.Image.alternativeText"
                :class="['w-full shadow-lg transform hover:scale-105 duration-100', selectedOption && selectedOption.id === option.id ? 'scale-105 border-2 border-green-400' : '']">
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
    selectOption: function (option) {
      option.stepNumber = this.stepData.StepNumber;

      this.$store.commit('addSelectedOption', { option });
    }
  },
  computed: {
    selectedOption: function () {
      return this.$store.getters.getSelectedOptionByStep(this.stepData.StepNumber)
    }
  }
}
</script>
