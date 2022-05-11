<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Particles from '../components/Particles.vue';
const htmlEl = window?.document.querySelector('html')
htmlEl?.classList.toggle('dark', true)
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="page-footer">&copy; Jen Looper 2022</div>
    </template>
  </ParentLayout>
  <!--particles from https://codepen.io/Mertl/details/GexapP -->
  <Particles/>
</template>

<style lang="css">
.theme-container.no-navbar .theme-default-content:not(.custom) > h1 {
  margin-top: 0px;
  padding-top: 1.5rem;
}
</style>

