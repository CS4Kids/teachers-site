
<template>
  <ParentLayout class="container">
    <template #page>
    </template>
    <template #page-bottom>
      <div class="footer">&copy; Jen Looper {{ now }}</div>
    </template>
  </ParentLayout>
</template>


<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default { 
  computed: {
    now () {
      let date = new Date().getFullYear();
      return date
    }
  },
  components: {
    ParentLayout
  },
}
</script>