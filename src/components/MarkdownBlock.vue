<script setup>
import MarkdownIt from 'markdown-it'

defineProps({
  rawMarkdown: String
})

const markdown = new MarkdownIt()
</script>

<template>
  <div v-html="markdown.render(rawMarkdown)"></div>
</template>