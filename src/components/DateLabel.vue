<script setup lang="ts">
defineProps({
  date: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="border rounded border-opacity-100 d-flex align-center pa-1" style="height: 22px;">
    {{ date }}
  </div>
</template>