<script setup>
import BlogCard from '../components/BlogCard.vue';
import { blogData } from '../blogData';
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay();
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
      :tags="data.tags"
      :compact="smAndDown"
      :image="data.image"
    ></BlogCard>
  </div>
</template>

<style>
</style>