<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

defineProps({
  title: String,
  subtitle: String,
  path: String
})

function goToBlog(path) {
  router.push(`/blog/${path}`)
}
</script>

<template>
  <v-card
    width="200"
    height="200"
    :title="title"
    :subtitle="subtitle"
    variant="elevated"
    color="#5b5bff"
    hover
    @click="goToBlog(path)"
  >
  </v-card>
</template>