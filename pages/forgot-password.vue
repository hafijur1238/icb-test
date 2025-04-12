<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <!-- Larger container -->
    <div class="w-full max-w-2xl bg-white rounded-lg shadow-lg p-12">
      <h1 class="text-3xl font-bold text-center text-gray-800">
        Forgot Password
      </h1>
      <p class="text-lg text-gray-600 text-center mt-4">
        Enter your email address below and we'll send you a link to reset your
        password.
      </p>
      <form @submit.prevent="handleSubmit" class="mt-8">
        <div class="mb-6">
          <label for="email" class="block text-lg font-medium text-gray-700"
            >User ID or Email</label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter your email address"
            class="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
          />
        </div>
        <button
          type="submit"
          class="mt-8 w-full bg-blue-600 text-white py-3 px-6 text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Reset Link
        </button>
        <div class="mt-6 text-center">
          <nuxt-link to="/login" class="text-lg text-blue-500 hover:underline">
            Back to Login
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    handleSubmit() {
      // Perform forgot password logic here
      if (this.email) {
        console.log("Reset password link sent to:", this.email);
        alert("A reset link has been sent to your email.");
      } else {
        alert("Please enter a valid email address.");
      }
    },
  },
};
</script>

<style>
/* Optional styles for customizations */
</style>
