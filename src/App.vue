<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-navigation-drawer permanent>
      <v-list-item title="alexjf.dev" subtitle="Welcome to my website!" />
      <v-divider />
      <v-list-item
        to="/"
        title="About Me"
      ></v-list-item>
      <v-list-item
        to="/blog"
        title="Blog"
      ></v-list-item>
      <v-list-item
        href="https://docs.google.com/document/d/14j_l1dUeu62DXA6XgZuLHjjRFVyi_-cUKQARoVIh2PE/edit?usp=sharing"
        title="Resume"
        target="_blank"
      ></v-list-item>
      <v-list-item
        href="https://www.linkedin.com/in/alexander-fuhrig/"
        title="LinkedIn"
        target="_blank"
      ></v-list-item>
      <v-list-item
        href="https://github.com/AlexJFDev"
        title="GitHub"
        target="_blank"
      ></v-list-item>
    </v-navigation-drawer>
    <v-main>
      <div class="router-container">
        <RouterView></RouterView>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
.router-container {
  margin: 16px;
}
</style>
