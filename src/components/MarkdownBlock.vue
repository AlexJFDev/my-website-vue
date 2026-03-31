<script setup lang="ts">
import markdownIt from 'markdown-it'

defineProps({
  rawMarkdown: { type: String, default: '' }
})

const markdown = new markdownIt()
</script>

<template>
  <div v-html="markdown.render(rawMarkdown)"></div>
</template>