
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
const userMode = localStorage.getItem('vuepress-color-scheme');
      if(!userMode) localStorage.setItem('vuepress-color-scheme', 'dark'); // xxx is the one you like
			const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (userMode === 'dark' || (userMode !== 'light' && systemDarkMode)) {
				document.documentElement.classList.toggle('dark', true);
			}
export default { 
  components: {
    ParentLayout,
    Particles,
  },
}
</script>