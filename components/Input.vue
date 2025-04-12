<script setup>
const model = defineModel();
defineProps({
  modelValue: String, // Allows v-model to work
  label: String, // Label for the input
  type: { type: String, default: "text" }, // Input type
  placeholder: String, // Placeholder text
  error: String, // Error message for validation
  className: { type: String, default: "input-field" },
  touched: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <label class="block text-gray-700">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      class="input-field"
      :placeholder="placeholder"
    />
    <p v-if="touched && error" class="text-red-500 text-sm mt-1">
      {{ error }}
    </p>
  </div>
</template>
