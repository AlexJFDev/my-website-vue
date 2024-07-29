<script setup>
import { RouterView } from 'vue-router'

import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>

<template>
  <v-app>
    <v-navigation-drawer :permanent="!mobile">
      <v-list-item class="nav-drawer-title" title="alexjf.dev" subtitle="Welcome to my website!" />
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
    <v-app-bar :title="name"></v-app-bar>
    <v-main class="main">
      <div class="content pa-2">
        <RouterView></RouterView>
      </div>
    </v-main>
  </v-app>
</template>

<style scoped>
.nav-drawer-title {
  height: var(--app-bar_height);

  border-color: var(--color_secondary);
  border-style: solid;
  border-width: 0 0 1px 0;
}
.main {
  display: flex;
  justify-content: center;
  .content {
    height: 100%;
    width: 100%;
    max-width: var(--content_width);

    border-color: var(--color_secondary);
    border-style: solid;
    border-width: 0 1px 0 1px;
  }
}
</style>
