<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Particles from '../components/Particles.vue';
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">&copy; Jen Looper 2022</div>
    </template>
  </ParentLayout>
  <!--particles from https://codepen.io/Mertl/details/GexapP -->
  <Particles/>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>
