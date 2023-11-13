<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

defineProps({
  title: String,
  subtitle: String
})

function goToBlog(blogPath) {
  router.push(`/blog/${blogPath}`)
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
    @click="goToBlog('blogPath')"
  >
  </v-card>
</template>