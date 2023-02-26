import { defineClientConfig } from '@vuepress/client'
import HomeLayout from './layouts/HomeLayout.vue'
import ContactLayout from './layouts/ContactLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
import PasscodeLayout from './layouts/PasscodeLayout.vue'
  
export default defineClientConfig({
    layouts: {
      HomeLayout,ContactLayout,AuthLayout,PasscodeLayout
    },
    enhance({ router }) {
      let isAuthenticated = false;
      //this is a browser api so wrap the whole thing in non-SSR catch
      if (!__VUEPRESS_SSR__) {
        localStorage.setItem('vuepress-color-scheme', 'dark');
        const auth = localStorage.getItem("logged-in");
        console.log('localstorage says', auth)
      if (auth == 'false'){
        isAuthenticated = false;
      }
      else {
        isAuthenticated = true;
      }
      router.beforeEach((to) => {
        let gated = (to.fullPath.indexOf('lessons') != -1);
        console.log(gated,isAuthenticated)
        //if we're in a lessons area and we're not authenticated, go to login page
        if (gated && !isAuthenticated){
          return { path: '/login/' }
          }
        })
      }
    },
  })



