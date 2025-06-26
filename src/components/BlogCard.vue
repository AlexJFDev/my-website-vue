<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

defineProps({
  title: String,
  subtitle: String,
  path: String,
  date: String
})

function goToBlog(path) {
  router.push(`/blog/${path}`)
}
</script>

<template>
  <v-card
    class="blog-card"
    height="200"
    variant="elevated"
    color="#5b5bff"
    hover
    @click="goToBlog(path)"
  >
    <v-card-item>
      <div>
        <div class="text-overline mb-1 text-right">
          {{ date }}
        </div>
        <div class="text-h6 mb-1">
          {{ title}}
        </div>
        <div class="text-caption">{{ subtitle }}</div>
      </div>
    </v-card-item>
  </v-card>
</template>