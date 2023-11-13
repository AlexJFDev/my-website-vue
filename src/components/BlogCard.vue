<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function goToBlog(blogPath) {
  router.push(`/blog/${blogPath}`)
}
</script>

<template>
  <v-card
    width="200"
    height="200"
    title="Blog Title"
    subtitle="Text from blog"
    text="Prob not use"
    variant="elevated"
    color="#5b5bff"
    hover
    @click="goToBlog('blogPath')"
  >
  </v-card>
</template>