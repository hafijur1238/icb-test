<template>
  <nav class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div
      class="max-w-[1480px] mx-auto flex items-center justify-between px-4 py-[5px]"
    >
      <!-- Left Section: Logo and Navigation Links -->
      <div class="flex items-center gap-6 md:gap-10">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center" @click="closeMenu">
          <img
            src="@/assets/Icb-logo.png"
            alt="ICB Logo"
            class="h-[50px] w-[60px] md:h-[70px] md:w-[80px]"
          />
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center space-x-6">
          <!-- Desktop Dropdown for Services -->
          <div
            class="relative"
            @mouseenter="showDropdown = true"
            @mouseleave="dropdownTimeout"
          >
            <button
              class="text-gray-800 font-medium hover:text-blue-500 flex items-center"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1 transition-transform duration-300"
                :class="{ 'rotate-180': showDropdown }"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <!-- Dropdown Menu with Animation -->
            <transition name="fade-slide">
              <div
                v-show="showDropdown"
                class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2"
                @mouseenter="cancelDropdownTimeout"
                @mouseleave="dropdownTimeout"
              >
                <NuxtLink
                  to="/services/web-development"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Web Development
                </NuxtLink>
                <NuxtLink
                  to="/services/mobile-development"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Mobile Development
                </NuxtLink>
                <NuxtLink
                  to="/services/seo"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  SEO Optimization
                </NuxtLink>
              </div>
            </transition>
          </div>
          <NuxtLink
            to="/blog"
            class="text-gray-800 font-medium hover:text-blue-500"
          >
            Blog
          </NuxtLink>
        </div>
      </div>

      <!-- Desktop Right Section -->
      <div class="hidden md:flex space-x-4">
        <NuxtLink
          to="/login"
          class="text-gray-800 font-medium hover:text-blue-500 pt-[8px]"
        >
          Login
        </NuxtLink>
        <NuxtLink
          to="/registration"
          class="bg-blue-700 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800"
        >
          Registration
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-16 left-0 w-full bg-white shadow-md"
    >
      <!-- Mobile Services Dropdown -->
      <div
        @click="toggleDropdown"
        class="px-4 py-2 text-gray-800 font-medium hover:bg-gray-100 cursor-pointer flex items-center"
      >
        Services
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 ml-1 transition-transform duration-300"
          :class="{ 'rotate-180': isDropdownVisible }"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <!-- Mobile Dropdown Items -->
      <transition name="fade-slide">
        <div v-if="isDropdownVisible" class="bg-gray-50">
          <NuxtLink
            to="/services/web-development"
            @click="closeMenu"
            class="block px-6 py-2 text-gray-700 hover:bg-gray-100"
          >
            Web Development
          </NuxtLink>
          <NuxtLink
            to="/services/mobile-development"
            @click="closeMenu"
            class="block px-6 py-2 text-gray-700 hover:bg-gray-100"
          >
            Mobile Development
          </NuxtLink>
          <NuxtLink
            to="/services/seo"
            @click="closeMenu"
            class="block px-6 py-2 text-gray-700 hover:bg-gray-100"
          >
            SEO Optimization
          </NuxtLink>
        </div>
      </transition>

      <!-- Mobile Blog, Login, and Registration Links -->
      <NuxtLink
        to="/blog"
        @click="closeMenu"
        class="block px-6 py-2 text-gray-700 hover:bg-gray-100"
      >
        Blog
      </NuxtLink>
      <NuxtLink
        to="/login"
        @click="closeMenu"
        class="block px-6 py-2 text-gray-700 hover:bg-gray-100"
      >
        Login
      </NuxtLink>
      <NuxtLink
        to="/registration"
        @click="closeMenu"
        class="block px-6 py-2 text-white bg-blue-700 hover:bg-blue-800"
      >
        Registration
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false, // Mobile menu state
      isDropdownVisible: false, // Mobile dropdown state
      showDropdown: false, // Desktop dropdown state
      timeoutId: null,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (!this.isMenuOpen) this.isDropdownVisible = false;
    },
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.isDropdownVisible = false;
    },
    // Delayed closing to prevent flickering
    dropdownTimeout() {
      this.timeoutId = setTimeout(() => {
        this.showDropdown = false;
      }, 200);
    },
    // Cancel timeout if user moves back in
    cancelDropdownTimeout() {
      clearTimeout(this.timeoutId);
    },
  },
};
</script>

<style scoped>
/* Fade & Slide Animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Adjust body padding for fixed navbar */
body {
  padding-top: 64px;
}
</style>
