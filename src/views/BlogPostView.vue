<script setup>
import MarkdownBlock from '../components/MarkdownBlock.vue';
import { blogData } from '../blogData';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute()

/* const blogKey = computed(() => {
  return route.path.split('/').pop()
})*/

const blogKey = route.path.split('/').pop()

const blogContent = computed(() => {
  return blogData[blogKey].content
})
</script>

<template>
  <MarkdownBlock :rawMarkdown="blogContent"></MarkdownBlock>
</template>