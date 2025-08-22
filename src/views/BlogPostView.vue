<script setup>
import MarkdownBlock from '../components/MarkdownBlock.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useBlogStore } from '../stores/blogs';

const route = useRoute()

/* const blogKey = computed(() => {
  return route.path.split('/').pop()
})*/

const blogKey = route.path.split('/').pop()

const blogStore = useBlogStore()

const blogContent = computed(() => {
  return blogStore.blogs[blogKey].content
})
</script>

<template>
  <MarkdownBlock :rawMarkdown="blogContent"></MarkdownBlock>
</template>