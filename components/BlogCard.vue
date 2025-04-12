<template>
  <div class="bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
    <!-- Image Section -->
    <div class="h-40 w-full">
      <img
        :src="post.image"
        alt="Blog Thumbnail"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>

    <!-- Content Section -->
    <div class="flex-grow flex flex-col justify-between mt-2">
      <div>
        <p class="text-gray-500 text-sm">
          {{ post.date }} · {{ post.readTime }}
        </p>
        <h2 class="text-lg font-bold mt-2">{{ post.title }}</h2>
        <p class="text-gray-600 text-sm mt-1 line-clamp-3">
          {{ post.excerpt }}
        </p>
      </div>

      <!-- Read More Button -->
      <NuxtLink
        :to="`/blog/${post.slug}`"
        class="mt-4 px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-white hover:text-blue-600 border border-blue-600 transition"
      >
        Read more
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        typeof value === "object" &&
        value !== null &&
        "image" in value &&
        "date" in value &&
        "readTime" in value &&
        "title" in value &&
        "excerpt" in value &&
        "slug" in value
      );
    },
  },
});
</script>

<style scoped>
.bg-white {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
