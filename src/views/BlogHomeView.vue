<script setup>
import BlogCard from '../components/BlogCard.vue';
import { blogData } from '../blogData';
</script>

<template>
  <div class="blog-card-container">
    <BlogCard 
      v-for="(data, path) in blogData"
      :key="path"
      :title="data.title"
      :subtitle="data.subtitle"
      :path="path"
      :date="data.date"
    ></BlogCard>
  </div>
</template>

<style>
.blog-card-container {
  display: flex;
  gap: 10px;
  flex-direction: column;
}
</style>