<script setup>
import BlogCard from '../components/BlogCard.vue';
import { blogData } from '../blogData';
</script>

<template>
  <div class="d-flex ga-2 flex-column">
    <BlogCard 
      v-for="(data, path) in blogData"
      :key="path"
      :title="data.title"
      :blurb="data.subtitle"
      :path="path"
      :date="data.date"
    ></BlogCard>
  </div>
</template>

<style>
</style>