<script setup lang="ts">
import MarkdownBlock from '../components/MarkdownBlock.vue'
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useBlogStore } from '../stores/blogs'

const route = useRoute()

const blogKey = route.path.split('/').pop() || ''

const blogStore = useBlogStore()

const blogContent = computed(() => blogStore.blogs[blogKey]?.content || '')

onMounted(() => blogStore.fetchBlogs())
</script>

<template>
  <MarkdownBlock :rawMarkdown="blogContent"></MarkdownBlock>
</template>