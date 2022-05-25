
<template>
 
  <ParentLayout>
 
    <template #navbar>
      <div class="page-footer"><h3>Coming Soon: A New Textbook</h3></div>
    </template>
    
    <template #page-bottom>
      <footer class="page-footer footer">&copy; Jen Looper 2022</footer>
    </template>
   
  </ParentLayout>
  <!--particles from https://codepen.io/Mertl/details/GexapP -->
   <Particles/>
</template>

<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Particles from '../components/Particles.vue';
export default { 
  components: {
    ParentLayout,
    Particles,
  },
}
</script>