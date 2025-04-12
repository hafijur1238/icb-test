<template>
  <div class="max-w-5xl mx-auto py-16 px-6 pt-28">
    <h1 class="text-2xl font-bold mb-6">ICB Terms & Conditions</h1>

    <!-- Agreements -->
    <div v-for="(agreement, index) in agreements" :key="index" class="mb-6">
      <h2 class="text-lg font-semibold mb-2">Agreement {{ index + 1 }}</h2>
      <p class="text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Varius fringilla pulvinar cursus
        id maecenas urna. Tempor risus nec condimentum sit vestibulum mauris
        erat morbi. Erath magna aenean lectus arcu pulvinar congue sem cras.
        Amet eros massa elit lectus enim proin condimentum. Sem lacus eu tempus
        cras tellus consectetur. Quis nunc viverra feugiat neque. Id aenean
        gravida quam leo nibh elit. Nibh elementum eu amet ut eros gravida
        mauris convallis pellentesque. Est sed nunc integer feugiat a congue in
        et id.
      </p>
      <p v-if="index === 0" class="mt-4 text-gray-800">
        One tactic I've found useful is maintaining originality in message
        essence, with
        <span class="font-semibold">unique perspectives</span> infusing life
        beyond words onto pages!
      </p>
    </div>

    <!-- Terms & Conditions Checkbox -->
    <div class="flex items-center mt-6">
      <input
        v-model="isChecked"
        type="checkbox"
        id="terms"
        class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label for="terms" class="ml-2 text-gray-700">
        I agree to the
        <span
          @click="navigateTo('/terms')"
          class="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          terms and conditions
        </span>
      </label>
    </div>

    <!-- Create Agreement Button -->
    <div class="flex">
      <button
        @click="handleRegister"
        :disabled="!isChecked"
        class="mt-6 bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition hover:bg-blue-700 disabled:bg-gray-400"
      >
        Create Account
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isChecked = ref(false);
const agreements = ref([1, 2, 3]);

const handleRegister = () => {
  if (isChecked.value) {
    router.push("/registration"); // Redirects to the registration page
  }
};
</script>

<style scoped>
/* Optional: Add any custom styles here */
</style>
