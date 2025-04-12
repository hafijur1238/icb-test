<template>
  <div
    class="min-h-screen py-[150px] flex flex-col items-center justify-center bg-gray-100"
  >
    <div>
      <!-- Back Button -->
      <back-button></back-button>

      <!-- Heading and Description -->
      <h1 class="text-xl font-bold text-center text-gray-800 mb-6">
        Invest in the founders you believe in
      </h1>
      <p class="text-center text-lg text-gray-600 mb-4">
        Join over 1 million investors who are funding the future
      </p>
      <p class="text-center mb-12">
        <span class="mr-2">Already have an account?</span>
        <nuxt-link
          to="/login"
          class="underline decoration-blue-800 text-blue-800"
          >Sign in</nuxt-link
        >
      </p>
    </div>

    <div class="bg-white p-12 rounded-lg shadow-xl max-w-[500px] w-full">
      <!-- Registration Buttons -->
      <h3 class="text-[18px] font-semibold text-center text-gray-800 mb-10">
        Register for an account
      </h3>
      <div class="flex flex-col gap-[10px]">
        <nuxt-link to="/register/investor">
          <register-button>Register as an Investor</register-button>
        </nuxt-link>

        <nuxt-link to="/register/seeker">
          <register-button> Register as an Investment Seeker </register-button>
        </nuxt-link>

        <nuxt-link to="/register/member">
          <register-button> Register as a General Member </register-button>
        </nuxt-link>
      </div>
    </div>
    <!-- Terms and Conditions Link -->
    <div class="text-center mt-8">
      <a
        href="#"
        class="text-lg text-blue-500 hover:underline"
        @click.prevent="openModal"
        >Read terms and conditions</a
      >
    </div>
    <!-- Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white p-8 rounded-lg w-3/4 md:w-1/2">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">
          ICB Terms & Conditions
        </h2>
        <p class="text-xl text-gray-700 mb-4">
          These are the terms and conditions. Please read them carefully.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p class="text-xl text-gray-700 mb-4">
          These are the terms and conditions. Please read them carefully.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p class="text-xl text-gray-700 mb-4">
          These are the terms and conditions. Please read them carefully.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="flex justify-end">
          <button
            class="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
            @click="closeModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationPage",
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped>
/* Additional styling can go here */
</style>
