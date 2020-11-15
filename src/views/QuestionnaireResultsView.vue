<template>
  <div class="w-full h-full">
    <div class="flex w-full flex-none justify-center h-1/5 bg-black bg-opacity-25">
      <TheHeaderBar :isCollapsed="true" :lockBarState="true" />
      <RouteTitle :title="'Interior design restyled. Expect more for less.'" class="text-center pb-8 uppercase" />
    </div>
    <div class="background">
      <div class="bg-white bg-opacity-75 flex justify-center pb-16">
        <div class="text-center">
          <div class="text-lg md:text-2xl py-4">
            <p>Welcome to Entrance Design.</p>
            <p>Yay, you've taken the time to fill out our design questionnaire.</p>
          </div>
          <br>
          <p>Your design style is:</p>
          <div v-if="this.result" class="flex flex-col justify-center items-center py-4 text-lg">
            <h2 class="text-4xl uppercase pb-2">{{ result.Title }}</h2>
            <img :src="`${imageBaseUrl}${result.Image.url}`" class="w-1/4 border-black border-4 p-2">
            <p class="w-1/2 py-8">{{ result.Description }}</p>
            <p class="w-1/2">Do you want to see what {{ result.Title }} looks like for your home?</p>
            <p class="w-1/2 py-8">
              <a
                class="text-blue-500 font-bold text-xl uppercase"
                :href="`mailto:hello@entrancedesign.co.nz?subject=My%20questionnaire%20results&body=My%20result%20was%20${ result.Title }.%20Can%20you%20please%20help%20me%20to%20style%20my%20home?`">
              Click here</a></p>
            <p>to email us with your results and we will get back to you as soon as we can.</p>
            <div class="pt-24">
              <p>With thanks</p>
              <p>Nicky & Claire</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';
import getImageUrl from '../utils/image';

export default {
  name: 'QuestionnaireResults',
  components: {
    TheHeaderBar,
    RouteTitle
  },
  data: function() {
    return {
      result: null,
    }
  },
  computed: {
    imageBaseUrl: function () {
      return getImageUrl();
    },
  },
  async mounted() {
    const result = this.$store.getters.getFinalResult();
    if (result === '' || result === null) {
      this.$router.push('/questionnaire');
    }

    const response = await axios.get(`${process.env.VUE_APP_API_HOST}/questionnaire-results?OptionSlug_eq=${result}`);
    this.result = response.data[0];
  }
}
</script>
