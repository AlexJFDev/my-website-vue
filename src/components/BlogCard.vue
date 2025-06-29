<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  blurb: {
    type: String,
    required: false
  },
  path: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  topics: {
    type: Array,
    required: false,
    default: () => []
  },
  image: {
    type: String,
    required: false
  }
})

function openBlog() {
  router.push(`/blog/${props.path}`)
}
</script>

<template>
  <v-card
    class="blog-card"
    height="200"
    variant="elevated"
    color="#5b5bff"
    hover
    @click="openBlog()"
  >
    <v-card-item>
      <div>
        <div class="text-overline mb-1 text-right">
          {{ date }}
        </div>
        <div class="text-h6 mb-1">
          {{ title}}
        </div>
        <div class="text-caption">{{ blurb }}</div>
      </div>
    </v-card-item>
  </v-card>
</template>