<script setup>
import BlogCard from '../components/BlogCard.vue';
import { blogData } from '../blogData';
</script>

<template>
  Content
  <BlogCard v-for="blog in blogData"></BlogCard>
</template>