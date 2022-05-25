<template>
 <ParentLayout>
     <template #page-bottom>
      <div class="page-footer">&copy; Jen Looper 2022</div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
export default { 
  components: {
    ParentLayout
  },
}
</script>