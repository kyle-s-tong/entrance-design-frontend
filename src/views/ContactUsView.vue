<template>
  <div class="w-full h-full">
    <div class="flex w-full justify-center h-3/4 bg-black bg-opacity-25">
      <TheHeaderBar :collapsePoint="100" />
      <RouteTitle :title="'Contact us'" />
    </div>
    <div class="background flex">
      <div class="w-full justify-center flex bg-white bg-opacity-90 pt-32">
        <div class="flex w-2/3">
          <div class="w-1/3">
            <div>
              <h2 class="text-3xl">Contact us</h2>
              <!-- TODO: Componentise -->
              <div class="py-4 text-sm">
                <p>Claire Kingan-Jones</p>
                <!-- TODO: add link -->
                <p>Email: click here</p>
                <p>Ph: +64 21 84 5555</p>
              </div>
              <!-- TODO: Componentise -->
              <hr>
              <div class="py-4 text-sm">
                <p>Nicky Tong</p>
                <!-- TODO: add link -->
                <p>Email: click here</p>
                <p>Ph: +64 21 312 747</p>
              </div>
              <hr>
            </div>
          </div>
          <div class="w-2/3 pl-6 pb-12">
            <form class="flex flex-col">
              <div class="flex">
                <!-- TODO: Componentise -->
                <div class="flex flex-col p-2 flex-grow">
                  <label for="name">Name</label>
                  <input id="name" v-model="formData.name">
                </div>
                <!-- TODO: Componentise -->
                <div class="flex flex-col p-2 flex-grow">
                  <label for="email">Email address</label>
                  <input id="email" v-model="formData.email">
                </div>
                <!-- TODO: Componentise -->
                <div class="flex flex-col p-2 flex-grow">
                  <label for="phone">Phone number</label>
                  <input id="phone" v-model="formData.phone">
                </div>
              </div>
              <div class="w-full">
                <!-- TODO: Componentise -->
                <div class="flex flex-col p-2">
                  <label for="subject">Subject</label>
                  <input id="subject" v-model="formData.subject">
                </div>
              </div>
              <div>
                <!-- TODO: Componentise -->
                <div class="flex flex-col p-2">
                  <label for="message">Message</label>
                  <textarea id="message" v-model="formData.message"></textarea>
                </div>
              </div>
              <vue-recaptcha class="p-2" :sitekey="this.siteKey"></vue-recaptcha>
              <!-- TODO: Style and wire up -->
              <button class="m-2 p-2 mt-12 border self-start" v-on:click="sendEmail">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';

export default {
  name: 'ContactUsView',
  components: {
    TheHeaderBar,
    RouteTitle,
    VueRecaptcha,
  },
  data: function () {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      },
      siteKey: process.env.VUE_APP_RECAPTCHA_SITE_KEY,
    }
  },
  methods: {
    sendEmail: function() {
      console.log(this.formData);
    }
  }
}
</script>
