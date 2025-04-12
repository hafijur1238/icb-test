<script setup>
import { ref, reactive } from "vue";
const router = useRouter();

// Form values
const form = reactive({
  fullName: "",
  email: "",
  nid: "",
  nidImage: "",
  phone: "",
  passport: "",
  passportImage: "",
  image: "",
  division: "",
  district: "",
  thana: "",
  address: "",
  paymentMethod: "",
  transactionId: "",
});

// Track which fields have been touched (blurred)
const touched = reactive({
  fullName: false,
  email: false,
  nid: false,
  nidImage: false,
  phone: false,
  passport: false,
  passportImage: false,
  image: false,
  division: false,
  district: false,
  thana: false,
  address: false,
  paymentMethod: false,
  transactionId: false,
});

// Store validation errors
const errors = reactive({});
const isSubmitting = ref(false);

const validators = {
  fullName: (value) => {
    if (!value || value.length < 1) return "Full Name is required";
    if (value.length > 50) return "Max 50 characters allowed";
    return null;
  },

  email: (value) => {
    if (!value || value.length < 1) return "Email is required";
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Invalid email address";
    return null;
  },

  nid: (value) => {
    if (!value) return "NID is required";
    if (value.length < 10) return "NID must be at least 10 characters";
    if (value.length > 20) return "NID must be at most 20 characters";
    return null;
  },

  nidImage: (value) => {
    if (!value) return null; // Optional
    // URL validation regex
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlRegex.test(value)) return "Invalid NID image URL";
    return null;
  },

  phone: (value) => {
    if (!value) return "Phone is required";
    if (value.length < 10) return "Phone must be at least 10 digits";
    if (value.length > 15) return "Phone must be at most 15 digits";
    return null;
  },

  passport: (value) => {
    if (!value) return null; // Optional
    if (value.length < 6) return "Passport must be at least 6 characters";
    if (value.length > 15) return "Passport must be at most 15 characters";
    return null;
  },

  passportImage: (value) => {
    if (!value) return null; // Optional
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlRegex.test(value)) return "Invalid passport image URL";
    return null;
  },

  image: (value) => {
    if (!value) return null; // Optional
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlRegex.test(value)) return "Invalid image URL";
    return null;
  },

  division: (value) => {
    if (!value || value.length < 1) return "Division is required";
    return null;
  },

  district: (value) => {
    if (!value || value.length < 1) return "District is required";
    return null;
  },

  thana: (value) => {
    if (!value || value.length < 1) return "Thana is required";
    return null;
  },

  address: (value) => {
    if (!value) return "Address is required";
    if (value.length < 5) return "Address must be at least 5 characters";
    return null;
  },

  paymentMethod: (value) => {
    if (!value) return "Payment method is required";
    return null;
  },

  transactionId: (value) => {
    // Optional
    return null;
  },
};

// Validate a single field on blur
const validateField = (fieldName) => {
  touched[fieldName] = true;

  if (validators[fieldName]) {
    const errorMessage = validators[fieldName](form[fieldName]);
    if (errorMessage) {
      errors[fieldName] = errorMessage;
    } else {
      delete errors[fieldName];
    }
  }
};

// Validate all fields (for form submission)
const validateAllFields = () => {
  let isValid = true;

  Object.keys(validators).forEach((fieldName) => {
    const errorMessage = validators[fieldName](form[fieldName]);
    if (errorMessage) {
      errors[fieldName] = errorMessage;
      touched[fieldName] = true;
      isValid = false;
    } else {
      delete errors[fieldName];
    }
  });

  return isValid;
};

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true;

  // Validate all fields
  const isValid = validateAllFields();

  if (isValid) {
    try {
      // Form submission logic here
      console.log("Form submitted successfully:", form);
      // ***** api call here****

      // Reset form or redirect user
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  isSubmitting.value = false;
};

// go back to previous page
const goBack = function () {
  router.go(-1);
};

const alert = (msg) => {
  window.alert(msg);
};

const { startUpload } = useUploadThing("videoAndImage", {
  onClientUploadComplete(res) {
    console.log(`onClientUploadComplete`, res);
    alert("Upload Completed");
    // profilePicture.value = res[0].ufsUrl;
  },
});
</script>

<template>
  <div class="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-28 mb-20">
    <!-- Back Button -->
    <div class="mb-6">
      <button
        @click="goBack"
        class="text-blue-600 hover:text-blue-800 font-semibold"
      >
        ← Back
      </button>
    </div>

    <!-- Header -->
    <div class="text-center mb-8">
      <h2 class="text-2xl font-semibold text-gray-800">
        Join us today to connect with great ventures and <br />
        make the most of your investments!
      </h2>
    </div>

    <!-- Registration Notice -->
    <div class="bg-[#AEA491] p-6 rounded-lg mb-6">
      <h3 class="font-semibold text-white">*Registration Notice</h3>
      <p class="text-sm text-white">
        To complete your registration, please note that a payment of [amount] is
        required. You can make this payment through any of the following
        methods:
      </p>
      <ul class="list-disc text-sm text-white pl-4">
        <li>Mobile Wallet: [Mobile Wallet Number]</li>
        <li>Bank Transfer: [Bank Account Details]</li>
        <li>Cash Payment: [Applicable for offline registration]</li>
      </ul>
      <p class="text-sm text-white">
        Once the payment is made, kindly retain the receipt or transaction ID as
        proof of payment. For any queries or assistance, feel free to contact us
        at [Contact Information].
      </p>
    </div>

    <!-- Form -->
    <form
      @submit.prevent="handleSubmit"
      class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      <!-- Full Name & Email -->
      <div>
        <label class="block text-gray-700">Your Full address</label>
        <input
          id="fullName"
          v-model="form.fullName"
          @blur="validateField('fullName')"
          @input="validateField('fullName')"
          type="text"
          class="input-field w-full"
          placeholder="Enter full Name"
        />
        <p
          v-if="touched.fullName && errors.fullName"
          class="text-red-500 text-sm mt-1"
        >
          {{ errors.fullName }}
        </p>
      </div>

      <div>
        <label class="block text-gray-700">Email address</label>
        <input
          v-model="form.email"
          type="email"
          @blur="validateField('email')"
          class="input-field w-full"
          placeholder="Enter email"
        />
        <p
          v-if="touched.email && errors.email"
          class="text-red-500 text-sm mt-1"
        >
          {{ errors.email }}
        </p>
      </div>

      <!-- NID Number & NID Image -->
      <div>
        <label class="block text-gray-700">NID number</label>
        <input
          v-model="nid"
          type="text"
          @blur="validateField('nid')"
          class="input-field w-full"
          placeholder="Enter NID number"
        />
        <p v-if="touched.nid && errors.nid" class="text-red-500 text-sm mt-1">
          {{ errors.nid }}
        </p>
      </div>
      <div>
        <label class="block text-gray-700">NID image/PDF</label>
        <!-- <input
          @change="handleFileUpload($event, 'nidImage')"
          type="file"
          class="file-input"
        /> -->

        <input
          type="file"
          v-bind:on-change="nidImage"
          @blur="validateField('nidImage')"
          @input="validateField('nidImage')"
          class="file-input w-full"
          @change="
            async (e) => {
              console.log(e);
              const file = e.target.files?.[0];
              if (!file) return;
              try {
                const result = await startUpload([file]);
                console.log('Upload result:', result);
              } catch (error) {
                console.error('Upload error:', error);
              }
            }
          "
        />
      </div>

      <!-- Phone Number & Passport Number -->
      <div>
        <label class="block text-gray-700">Phone number</label>
        <input
          v-model="phone"
          type="text"
          @blur="validateField('phone')"
          @input="validateField('phone')"
          class="input-field w-full"
          placeholder="Enter phone number"
        />
        <p
          v-if="touched.phone && errors.phone"
          class="text-red-500 text-sm mt-1"
        >
          {{ errors.phone }}
        </p>
      </div>
      <div>
        <label class="block text-gray-700">Passport number (if any)</label>
        <input
          v-model="passport"
          type="text"
          @blur="validateField('passport')"
          @input="validateField('passport')"
          class="input-field w-full"
          placeholder="Enter passport number"
        />
        <p
          v-if="touched.passport && errors.passport"
          class="text-red-500 text-sm mt-1"
        >
          {{ errors.passport }}
        </p>
      </div>

      <!-- Passport Photo & Image -->
      <div>
        <label class="block text-gray-700">Passport size photo</label>
        <input
          @change="handleFileUpload($event, 'passportPhoto')"
          type="file"
          class="file-input w-full"
        />
      </div>
      <div>
        <label class="block text-gray-700">Passport Image (if any)</label>
        <label>
          <input
            type="file"
            v-bind:on-change="passportImage"
            @blur="validateField('passportImage')"
            @input="validateField('passportImage')"
            class="file-input w-full"
            @change="
              async (e) => {
                console.log(e);
                const file = e.target.files?.[0];
                if (!file) return;
                try {
                  const result = await startUpload([file]);
                  console.log('Upload result:', result);
                } catch (error) {
                  console.error('Upload error:', error);
                }
              }
            "
          />
        </label>
      </div>

      <!-- Division, District, Thana (Dropdowns) -->
      <div
        class="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <div>
          <label class="block text-gray-700">Division</label>
          <select
            v-model="form.division"
            @change="updateDistricts"
            class="input-field w-full"
          >
            <option value="" disabled selected>Select Division</option>
            <option
              v-for="division in divisions"
              :key="division"
              :value="division"
            >
              {{ division }}
            </option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">District</label>
          <select
            v-model="district"
            @change="updateThanas"
            class="input-field w-full"
          >
            <option value="" disabled selected>Select District</option>
            <option
              v-for="district in districts"
              :key="district"
              :value="district"
            >
              {{ district }}
            </option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700">Thana</label>
          <select v-model="thana" class="input-field w-full">
            <option value="" disabled selected>Select Thana</option>
            <option v-for="thana in thanas" :key="thana" :value="thana">
              {{ thana }}
            </option>
          </select>
        </div>
      </div>

      <!-- Full Address -->
      <div class="col-span-1 sm:col-span-2">
        <label class="block text-gray-700">Full Address</label>
        <textarea
          v-model="address"
          @blur="validateField('address')"
          @input="validateField('address')"
          class="input-field w-full"
          placeholder="Enter full address"
        ></textarea>
        <p
          v-if="touched.address && errors.address"
          class="text-red-500 text-sm mt-1"
        >
          {{ errors.address }}
        </p>
      </div>

      <!-- Payment Method & Transaction ID -->
      <div>
        <label class="block text-gray-700">Select payment method</label>
        <select v-model="paymentMethod" class="input-field">
          <option value="" disabled selected>Select Payment Method</option>
          <option>Mobile Wallet</option>
          <option>Bank Transfer</option>
          <option>Cash Payment</option>
        </select>
      </div>
      <div>
        <label class="block text-gray-700">Transaction ID</label>
        <input
          v-model="transactionId"
          type="text"
          @blur="validateField('transactionId')"
          @input="validateField('transactionId')"
          class="input-field"
          placeholder="Enter transaction ID"
        />
        <p
          v-if="touched.transactionId && errors.transactionId"
          class="text-red-500 text-sm mt-1"
        >
          {{ errors.transactionId }}
        </p>
      </div>

      <!-- Submit Button -->
      <div class="col-span-1 sm:col-span-2 text-center mt-6">
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
        >
          Submit
        </button>
      </div>
    </form>

    <!-- Terms and Conditions Link -->
    <div class="text-center mt-6">
      <a href="#" class="text-blue-600" @click.prevent="toggleModal"
        >Read terms and conditions</a
      >
    </div>

    <!-- Terms and Conditions Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg w-3/4 md:w-1/2">
        <h2 class="text-xl font-semibold mb-4">Terms and Conditions</h2>
        <p class="mb-4 text-sm text-gray-600">
          Here are the terms and conditions...
        </p>
        <button
          @click="toggleModal"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
.input-field {
  @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500;
}

.file-input {
  @apply w-full border border-dashed border-gray-400 p-2 rounded-lg cursor-pointer;
}
</style>
