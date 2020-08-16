<template>
  <div class="w-full h-full background">
    <div class="w-full h-full bg-white bg-opacity-75 flex justify-center">
      <div class="w-1/2 h-full flex justify-center">
        <div class="flex flex-col h-full">
          <div class="flex flex-col items-center py-4">
            <div>
              {{ stepData.StepNumber }}
            </div>
            <div>
              {{ stepData.Title }}
            </div>
            <div>
              <VueShowdown :markdown="stepData.Description" />
            </div>
          </div>
          <div class="flex flex-col flex-grow">
            <input type="text" name="name" id="name" v-model="name" placeholder="name" class="p-1 m-1">
            <input type="text" name="emailAddress" id="emailAddress" v-model="emailAddress" placeholder="email address" class="p-1 m-1">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown';

export default {
  name: 'Step1',
  props: {
    stepData: Object
  },
  components: {
    VueShowdown,
  },
  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set (value) {
        this.$store.commit('setName', { name: value });
      }
    },
    emailAddress: {
      get() {
        return this.$store.state.emailAddress;
      },
      set (value) {
        this.$store.commit('setEmailAddress', { emailAddress: value });
      }
    }
  },
  mounted() {
    console.log(this.stepData);
  }
}
</script>
