<template>
  <div class="w-full h-full background">
    <div class="w-full h-full bg-white bg-opacity-75 flex justify-center">
      <div class="w-1/2 h-full flex justify-center">
        <div class="flex flex-col">
          <div>

          </div>
          <div class="flex flex-col">
            <input type="text" name="name" id="name" v-model="name" placeholder="name">
            <input type="text" name="emailAddress" id="emailAddress" v-model="emailAddress" placeholder="email address">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step1',
  props: {
    stepData: Object
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
