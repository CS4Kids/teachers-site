<template>
  <Layout>
    <template>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
  components: {
    Layout,
  },
}
</script>

<style>
html, body {
  background: black;
  color: white;
}
.header-anchor {
  display: none;
}

h1 {
  text-align: center;
  margin: 0 auto;
  margin-top: 50% !important;
}
.splash {
  text-align: center;
  font-size: 2em;
}
</style>
