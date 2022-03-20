<template>
<Particles/>
  <Layout>
    <template>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Particles from "../components/Particles.vue";
export default {
  components: {
    Layout, Particles
  },
  mounted() {
    const htmlEl = window?.document.querySelector('html')
    htmlEl?.classList.toggle('dark', true)
  }
}
</script>
