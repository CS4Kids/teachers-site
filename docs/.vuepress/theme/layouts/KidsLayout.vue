<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
const htmlEl = window?.document.querySelector('html')
htmlEl?.classList.toggle('dark', true)
</script>


<template>
 <ParentLayout>
     <template #page-bottom>
      <div class="page-footer">&copy; Jen Looper 2022</div>
    </template>
  </ParentLayout>
</template>

