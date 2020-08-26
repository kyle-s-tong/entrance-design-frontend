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
                <div class="flex flex-col p-2 w-1/3">
                  <label for="name">Name</label>
                  <input id="name" v-model="formData.name" required placeholder="name" class="placeholder-padding border border-entrance-gray rounded p-1">
                </div>
                <!-- TODO: Componentise -->
                <div class="flex flex-col p-2 w-1/3">
                  <label for="email">Email address</label>
                  <input id="email" v-model="formData.email" required placeholder="email address" class="placeholder-padding border border-entrance-gray rounded p-1">
                </div>
                <!-- TODO: Componentise -->
                <div class="flex flex-col p-2 w-1/3">
                  <label for="phone">Phone number</label>
                  <input id="phone" v-model="formData.phone" placeholder="phone number" class="placeholder-padding border border-entrance-gray rounded p-1">
                </div>
              </div>
              <div class="w-full">
                <!-- TODO: Componentise -->
                <div class="flex flex-col p-2">
                  <label for="subject">Subject</label>
                  <input id="subject" v-model="formData.subject" required placeholder="subject" class="placeholder-padding border border-entrance-gray rounded p-1">
                </div>
              </div>
              <div>
                <!-- TODO: Componentise -->
                <div class="flex flex-col p-2">
                  <label for="message">Message</label>
                  <textarea id="message" v-model="formData.message" required placeholder="write your message here.." class="placeholder-padding border border-entrance-gray rounded p-1"></textarea>
                </div>
              </div>
              <vue-recaptcha class="p-2" :sitekey="this.siteKey"></vue-recaptcha>
              <!-- TODO: Style and wire up -->
              <button class="m-2 p-2 mt-8 rounded border border-white self-start bg-entrance-gray text-white uppercase hover:bg-entrance-gray-text" v-on:click="sendEmail">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
    sendEmail: async function (event) {
      event.preventDefault();
      // TODO: Change server side to send nice email.
      await axios.post(`${process.env.VUE_APP_API_HOST}/email`, {
        "to": "kyle.simon.tong@gmail.com",
        "subject": "Contact form enquiry",
        "text": JSON.stringify(this.formData),
      });
    }
  }
}
</script>
