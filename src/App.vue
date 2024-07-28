<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-navigation-drawer class="nav-drawer" permanent>
      <v-list-item class="nav-title" title="alexjf.dev" subtitle="Welcome to my website!" />
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
    <v-main class="main">
      <div class="top-bar"></div>
      <div class="content-container">
        <RouterView></RouterView>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
.nav-drawer {
  .nav-title {
    height: var(--top-bar_height);
    border-color: var(--color-secondary);
    border-style: solid;
    border-width: 0 0 1px 0;
  }
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  .top-bar {
    width: 100%;
    height: var(--top-bar_height);

    border-color: var(--color-secondary);
    border-style: solid;
    border-width: 0 0 1px 0;
  }
  .content-container {
    padding: 16px;

    width: 100%;
    max-width: var(--content_width);
    height: 100%;


    border-color: var(--color-secondary);
    border-style: solid;
    border-width: 1px;
  }
}
</style>
