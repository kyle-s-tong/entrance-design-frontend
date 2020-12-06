<template>
  <div class="w-full h-full">
    <div
      v-if="showModal"
      class="h-screen w-full bg-black bg-opacity-50 z-50
             absolute flex items-center justify-center bg-modal"
    >
      <div
        class="bg-white rounded shadow p-4 w-1/3 h-1/2"
      >
        <div>
          <div class="mb-8 flex">
            <div class="flex-grow text-center text-xl">
              <h1>Payment</h1>
            </div>
            <button
              v-on:click="showModal = false"
              class="p-1"
            >
              X
            </button>
          </div>
          <div class="mb-8 flex flex-col">
            <div class="flex flex-col mb-4">
              <label for="email-address" class="text-gray-600 pl-2">
                Email Address*
              </label>
              <input
                v-model="emailAddress"
                type="text"
                placeholder="Email address"
                class="px-2 py-1 shadow-checkout-form rounded" required>
            </div>
            <div class="text-gray-600 pl-2">
              <label for="card-element">
                Credit or debit card
              </label>
            </div>
            <stripe-elements
              ref="elementsRef"
              :pk="publishableKey"
              locale="en"
              @token="tokenCreated"
            >
            </stripe-elements>
            <div v-if="errors" class="w-full h-1/2 border rounded border-red-300">
              {{ errors }}
            </div>
            <div class="self-end mt-16 mb-4">
              Total payment: ${{ totalAmount.toFixed(2) }}
            </div>
            <button
                @click="submit"
                :disabled="buttonDisabled"
                class="p-2 rounded border border-white self-end hover:bg-entrance-gray
                text-white uppercase bg-entrance-gray-text"
            >
              <div v-if="loading">
                <LoadingSpinner
                  class="flex w-full h-1/2 justify-center items-center"
                />
              </div>
              <div v-else>
                Submit payment
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full justify-center h-1/5 bg-black bg-opacity-25">
      <TheHeaderBar :lockBarState="true" :isCollapsed="true" />
      <RouteTitle :title="'Checkout'" />
    </div>
    <div class="flex justify-center w-full h-4/5 bg-white bg-opacity-75">
      <div class="w-2/3 flex flex-col items-center">
        <div class="flex flex-col items-center h-4/5 text-center  sm:mt-0 sm:ml-4 sm:text-left">
          <div
            v-if="paymentSuccess"
            class="flex justify-center w-full bg-green-200
                  bg-opacity-75 border rounder border-green-300 mt-4 p-2"
          >
              {{ paymentSuccess }}
          </div>
          <div class="pt-8" v-if="!paymentSuccess">
            <p class="text-lg text-black">
              Please review the items in your cart and then proceed to checkout:
            </p>
          </div>
          <div v-if="itemsInCart"
            class="h-full w-3/4 self-center items-center overflow-y-auto grid grid-cols-1 gap-1">
            <CheckoutItemTile v-for="(item, index) in itemsInCart" :key="index" :item="item" />
          </div>
          <div v-else class="pt-16 self-center">
            Please add some items to your cart to continue.
          </div>
        </div>
        <button
          v-on:click="showModal = true"
          v-if="itemsInCart"
          type="button"
          class="p-2 mt-16 rounded border border-white self-end hover:bg-entrance-gray
                text-white uppercase bg-entrance-gray-text"
        >
          Proceed
        </button>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      </div>
    </div>
  </div>
</template>

<script>
import { StripeElements } from 'vue-stripe-checkout';
import axios from 'axios';

import getImageUrl from '../utils/image';

import CheckoutItemTile from '../components/checkout/CheckoutItemTile';
import TheHeaderBar from '../components/TheHeaderBar';
import RouteTitle from '../components/RouteTitle';
import LoadingSpinner from '../components/LoadingSpinner';

export default {
  name: 'CheckoutView',
  props: {
    close: Function,
  },
  data() {
    return {
      showModal: false,
      loading: false,
      publishableKey: process.env.VUE_APP_STRIPE_PUBLIC_KEY,
      token: null,
      charge: null,
      emailAddress: null,
      paymentSuccess: null,
      errors: null,
    };
  },
  components: {
    CheckoutItemTile,
    TheHeaderBar,
    RouteTitle,
    StripeElements,
    LoadingSpinner,
  },
  computed: {
    imageBaseUrl() {
      return getImageUrl();
    },
    itemsInCart() {
      if (this.$store.getters.getNumberOfItemsInCart() > 0) {
        return this.$store.getters.getShoppingCart();
      }

      return false;
    },
    totalAmount() {
      const allProducts = this.itemsInCart;

      let total = 0.00;
      allProducts.forEach((product) => {
        total += product.Price;
      });
      return total;
    },
    buttonDisabled() {
      if (this.emailAddress) {
        return false;
      }

      return true;
    },
  },
  methods: {
    submit() {
      this.loading = true;
      this.$refs.elementsRef.submit();
    },
    parseProductsForOrder() {
      if (!this.itemsInCart) {
        return [];
      }

      return this.itemsInCart.map((item) => item.id);
    },
    async tokenCreated(token) {
      this.token = token;
      this.charge = {
        token: this.token.id,
        products: this.parseProductsForOrder(),
        emailAddress: this.emailAddress,
      };

      await this.sendTokenToServer(this.charge);
    },
    async sendTokenToServer(charge) {
      const response = await axios.post(`${process.env.VUE_APP_API_HOST}/orders`, charge);

      if (response.status !== 200) {
        this.errors = response.statusText;
        return;
      }

      this.$store.commit('clearCart');
      this.loading = false;
      this.showModal = false;
      this.paymentSuccess = 'Thank you for your purchase, you will receive an email confirmation shortly.';
    },
  },
  beforeRouteEnter(to, from, next) {
    next((component) => {
      if (component.$store.getters.getNumberOfItemsInCart() < 1) {
        component.$router.push('/shop');
      }
    });
  },
};
</script>
