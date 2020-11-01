<template>
  <div class="w-full h-full background">
    <div class="w-full h-full bg-white bg-opacity-90 flex justify-center">
      <div class="w-full h-full flex justify-center">
        <div class="flex flex-col w-10/12 md:w-1/2 h-full pt-8">
          <div class="flex flex-col items-center py-4">
            <div class="md:py-6">
              {{ stepData.StepNumber }}
            </div>
            <div class="py-6">
              <h2 class="text-center md:text-left uppercase text-2xl">{{ stepData.Title }}</h2>
            </div>
            <div>
              <VueShowdown class="text-center leading-8" :markdown="stepData.Description" />
            </div>
          </div>
          <div class="flex flex-col flex-grow">
            <p v-if="errors.length" class="text-red-500 py-2">
              <b>Please add in the following field(s):</b>
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </p>
            <label for="name">Name *</label>
            <input type="text" name="name" id="name" v-model="name" placeholder="name" class="my-2 p-2 border border-entrance-gray rounded">
            <label for="emailAddress">Email address *</label>
            <input type="text" name="emailAddress" id="emailAddress" v-model="emailAddress" placeholder="email address" class="my-2 p-2 border border-entrance-gray rounded">
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
    stepData: Object,
    errors: Array
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
  }
}
</script>
