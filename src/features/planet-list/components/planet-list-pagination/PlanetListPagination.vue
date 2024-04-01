<template>
  <div class="d-flex pa-3">
    <v-spacer />
    <v-btn
      class="mx-2"
      icon="mdi-chevron-left"
      color="primary"
      :disabled="!hasPreviousPage"
      @click="previousPage"
      aria-label="Previous page"
    />
    <v-btn
      class="mx-2"
      icon="mdi-chevron-right"
      color="primary"
      :disabled="!hasNextPage"
      @click="nextPage"
      aria-label="Next page"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  hasNextPage: {
    type: Boolean,
    default: false,
    required: false
  }
});

const model = defineModel({
  type: Number,
  required: true
});
const emit = defineEmits(['update:modelValue']);

const hasPreviousPage = computed(() => {
  return model.value > 1;
});

const nextPage = () => {
  emit('update:modelValue', model.value + 1);
};
const previousPage = () => {
  emit('update:modelValue', model.value - 1);
};
</script>
