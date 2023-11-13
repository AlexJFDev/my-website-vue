<script setup>
import BlogCard from '../components/BlogCard.vue';
import { blogData } from '../blogData';
</script>

<template>
  <div class="blog-card-container">
    <BlogCard 
      v-for="blog in blogData"
      :key="blog.path"
      :title="blog.title"
      :subtitle="blog.subtitle"
      :path="blog.path"
    ></BlogCard>
  </div>
</template>

<style>
.blog-card-container {
  width: auto;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, 200px);
}
</style>