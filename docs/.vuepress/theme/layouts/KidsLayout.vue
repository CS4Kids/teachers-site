<template>
 <ParentLayout>
     <template #page-bottom>
      <div class="page-footer">&copy; Jen Looper 2022</div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
const userMode = localStorage.getItem('vuepress-color-scheme');
      if(!userMode) localStorage.setItem('vuepress-color-scheme', 'dark'); // xxx is the one you like
			const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (userMode === 'dark' || (userMode !== 'light' && systemDarkMode)) {
				document.documentElement.classList.toggle('dark', true);
			}
export default { 
  components: {
    ParentLayout
  },
}
</script>