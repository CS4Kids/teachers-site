<template>
  <ParentLayout class="container">
    <template #page>  
       <!--add input here-->
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
  data() {
    return {
      user : null
    }
  },
  computed: {
    now () {
      let date = new Date().getFullYear();
      return date
    }
  },
  components: {
    ParentLayout
  },  

  async mounted(){
    
  },

  methods : {
    async login () {
      //enter passcode
    },
    async getUser(){
      //check local storage for auth
    },
    
    
  }
}
</script>

<style>
.teacher-page {
  padding: 2rem;
}
</style>