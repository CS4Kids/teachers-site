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
}
</script>

<!--<style>
.header-anchor {
  display: none;
}

.splash {
  text-align: center;
  margin: 0 auto;
  margin-top: 50%;
}
</style>-->
