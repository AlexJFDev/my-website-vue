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
  },
  color: {
    type: String,
    required: false,
    default: "blue-lighten-2"
  },
  compact: {
    type: Boolean,
    required: false,
    default: false
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
    :color="color"
    hover
    @click="openBlog()"
  >
    <v-card-item>
      <div class="d-flex flex-row justify-space-between">
        <v-card-title>{{ title}}</v-card-title>
        <div class="text-overline mb-1 text-right">
          {{ date }}
        </div>
      </div>
      <v-card-subtitle>{{ blurb }}</v-card-subtitle>
    </v-card-item>
  </v-card>
</template>