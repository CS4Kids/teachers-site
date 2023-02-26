<script setup>
import { computed } from "vue";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import Particles from "./components/Particles.vue";
const year = computed(() => new Date().getFullYear());
</script>

<template>
  <!-- particles from https://codepen.io/Mertl/details/GexapP -->
  <Particles />
  <ParentLayout class="container">
    <template #page>
      <h1 class="splashLg">Computer Science for Kids</h1>
      <p align="center" class="splash">a storytelling approach</p>
      <Content class="body"/>
    </template>
  </ParentLayout>
  <div class="footer">Jen Looper &copy; {{ year }}</div>
</template>