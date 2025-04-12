<template>
  <div class="max-w-5xl mx-auto py-16 px-6 pt-28 space-y-4">
    <div class="max-w-4xl mx-auto">
      <!-- Top green dots -->
      <div class="flex justify-end gap-1 mb-3">
        <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
        <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
      </div>

      <!-- Card container -->
      <div class="bg-white rounded-lg shadow-md">
        <!-- Personal Information Header -->
        <div class="flex justify-between items-center px-6 pt-6 pb-4">
          <h2 class="text-gray-800 font-medium">Personal Information</h2>
          <div class="flex gap-2">
            <button class="px-4 py-1 text-sm text-white bg-green-500 rounded">
              Accept
            </button>
            <button class="px-4 py-1 text-sm text-white bg-red-500 rounded">
              Reject
            </button>
          </div>
        </div>

        <!-- Personal Information Content -->
        <div class="px-6 py-4">
          <div class="flex gap-6">
            <!-- Profile Image -->
            <div class="w-24">
              <img
                src="/assets/hero_img.jpg"
                alt="Profile"
                class="w-24 h-24 rounded-lg object-cover"
              />
            </div>

            <!-- Profile Details -->
            <div class="flex-1 grid grid-cols-2 gap-y-3 gap-x-16">
              <div class="flex gap-3">
                <div class="text-gray-500 text-sm">Name</div>
                <div class="text-sm mt-0.5">Emma Carter</div>
              </div>
              <div class="flex gap-3">
                <div class="text-gray-500 text-sm">Email</div>
                <div class="text-sm mt-0.5">EmmaCarter@gmail.com</div>
              </div>
              <div class="flex gap-3">
                <div class="text-gray-500 text-sm">NID</div>
                <div class="text-sm mt-0.5">506952</div>
              </div>
              <div class="flex gap-3">
                <div class="text-gray-500 text-sm">User ID</div>
                <div class="text-sm mt-0.5">506952</div>
              </div>
              <div class="flex gap-3">
                <div class="text-gray-500 text-sm">Phone Number</div>
                <div class="text-sm mt-0.5">018*******</div>
              </div>
              <div class="flex gap-3">
                <div class="text-gray-500 text-sm">User type</div>
                <div class="text-sm mt-0.5">Investor</div>
              </div>
              <div class="flex gap-3">
                <div class="text-gray-500 text-sm">Nid Image</div>
                <div class="text-sm mt-0.5 text-blue-600 cursor-pointer">
                  Image
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="h-px bg-gray-100"></div>

        <!-- Address Section -->
        <div class="px-6 py-4">
          <h3 class="text-gray-800 font-medium mb-4">Address</h3>
          <div class="grid grid-cols-2 gap-y-6 gap-x-16 space-y-6">
            <div class="flex gap-3 mb-4">
              <div class="text-gray-500 text-sm">Division</div>
              <div class="text-sm mt-0.5">Dhaka</div>
            </div>
            <div class="flex gap-3">
              <div class="text-gray-500 text-sm">Thana</div>
              <div class="text-sm mt-0.5">Badda</div>
            </div>
            <div class="flex gap-3">
              <div class="text-gray-500 text-sm">District</div>
              <div class="text-sm mt-0.5">Dhaka</div>
            </div>
            <div class="flex gap-3">
              <div class="text-gray-500 text-sm">Address</div>
              <div class="text-sm mt-0.5">
                Building Street, Area, Badda, Dhaka
              </div>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="h-px bg-gray-100"></div>

        <!-- Documents Section -->
        <div class="px-6 py-4">
          <h3 class="text-gray-800 font-medium mb-4">Documents/Others</h3>
          <div class="grid grid-cols-2 gap-y-3 gap-x-16">
            <div class="flex gap-3">
              <div class="text-gray-500 text-sm">Payment Method</div>
              <div class="text-sm mt-0.5">Mobile wallet (Bkash)</div>
            </div>
            <div class="flex gap-3">
              <div class="text-gray-500 text-sm">Passport Image</div>
              <div class="text-sm mt-0.5 text-blue-600 cursor-pointer">
                Image
              </div>
            </div>
            <div class="flex gap-3">
              <div class="text-gray-500 text-sm">Transaction ID</div>
              <div class="text-sm mt-0.5">xyz********</div>
            </div>
            <div class="flex gap-3">
              <div class="text-gray-500 text-sm">Passport Number</div>
              <div class="text-sm mt-0.5">5069k52</div>
            </div>
            <div class="flex gap-3">
              <div class="text-gray-500 text-sm">Investment Amount</div>
              <div class="text-sm mt-0.5">2,00,000***</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can add props or composables for dynamic data
</script>

<style scoped>
/* Custom styles for better responsiveness if needed */
</style>
