<script setup>
defineProps({
  date: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="text-overline border rounded border-opacity-100">
    {{ date }}
  </div>
</template>