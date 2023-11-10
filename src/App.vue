<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const menu = ref([
  { 
    path: '/',
    title: 'About Me'
  },
  { 
    path: '/blog',
    title: 'Blog'
  },
  { 
    path: '/resume',
    title: 'Resume'
  },
  { 
    path: '/linkedin',
    title: 'LinkedIn'
  },
  { 
    path: '/github',
    title: 'GitHub'
  }
])
</script>

<template>
  <v-app>
    <v-navigation-drawer>
      <v-list-item title="alexjf.dev" subtitle="Welcome to my website!" />
      <v-divider />
      <v-list-item
        v-for="(item, i) in menu"
        :key="i"
        :to="item.path"
        :title="item.title"
      ></v-list-item>
    </v-navigation-drawer>
    <v-main>
      <RouterView/>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
