<template>
  <div class="w-full h-full items-center flex flex-col">
    <div class="flex w-full justify-center h-1/2 bg-black bg-opacity-25">
      <TheHeaderBar />
      <RouteTitle :title="'Contact us'" />
    </div>
    <div class="h-1/2 w-full justify-center flex bg-white bg-opacity-90 pt-32">
      <div class="w-1/2 flex">
        <div class="w-1/3">
          <div>
            Contact us
            <!-- TODO: Componentise -->
            <div class="py-4">
              <p>Claire Kingan-Jones</p>
              <!-- TODO: add link -->
              <p>Email: click here</p>
              <p>Ph: +64 21 84 5555</p>
            </div>
            <!-- TODO: Componentise -->
            <hr>
            <div class="py-4">
              <p>Nicky Tong</p>
              <!-- TODO: add link -->
              <p>Email: click here</p>
              <p>Ph: +64 21 312 747</p>
            </div>
            <hr>
          </div>
        </div>
        <div class="w-2/3 pl-6">
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
            <div>
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
            <!-- TODO: Style and wire up -->
            <button class="m-2 p-2 border self-start">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';

export default {
  name: 'ContactUsView',
  components: {
    TheHeaderBar,
    RouteTitle,
  },
  data: function () {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      }
    }
  }
}
</script>
