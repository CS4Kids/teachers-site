
<template> 
<!--particles from https://codepen.io/Mertl/details/GexapP -->
  <Particles/>

  <ParentLayout>
   <template #navbar>
      <div class="page-bar header">
      <h3>Coming Soon: A New Textbook</h3>
      </div>
    </template> 
   </ParentLayout>
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


