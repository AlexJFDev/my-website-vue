<script setup>
import BlogCard from '../components/BlogCard.vue';
import { useDisplay } from 'vuetify';

import { useBlogStore } from '../stores/blogs';

import { onMounted } from 'vue';

const blogStore = useBlogStore()

const { smAndDown } = useDisplay();

onMounted(() => {
  blogStore.fetchBlogs()
})
</script>

<template>
  <div class="d-flex ga-2 flex-column">
    <BlogCard 
      v-for="(data, path) in blogStore.blogs"
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