<template>
  <Layout>
    <template #page-top>
      <Particles />
    </template>
    <template #page>
    
    </template>
 
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
  components: {
    Layout,
  },
  mounted() {
    const htmlEl = window?.document.querySelector('html')
    htmlEl?.classList.toggle('dark', true)
  }
}
</script>


