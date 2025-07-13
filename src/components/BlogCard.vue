<script setup>
import { useRouter } from 'vue-router';
import DateLabel from './DateLabel.vue';

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
  tags: {
    type: Array,
    required: false,
    default: () => []
  },
  image: {
    type: String,
    required: false,
    default: ""
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
    class="d-flex flex-column"
    height="200"
    variant="elevated"
    :color="color"
    hover
    @click="openBlog()"
    :width="compact ? '200' : ''"
  >
    <v-card-text>
      <div class="d-flex flex-column ga-1">
        <div class="d-flex justify-space-between align-center">
          <p class="text-h6">{{ title}}</p>
          <DateLabel v-if="!compact" :date="date"/>
        </div>
        <p v-if="!compact" class="text-subtitle-1">{{ blurb }}</p>
      </div>
    </v-card-text>
    <v-card-actions>
      <div class="d-flex ga-1 flex-wrap">
        <v-chip
          v-for="tag in tags"
          :key="tag"
          variant="outlined"
          :size="compact ? 'small' : 'default'"
        >
          {{ tag }}
        </v-chip>
      </div>
    </v-card-actions>
  </v-card>
</template>