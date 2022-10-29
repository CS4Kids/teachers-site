<template>
  <ParentLayout class="container">
    <template #page-top>  
        <div v-if="user" class="teacher-page">         
          <h1>
            Welcome {{user.given_name}} {{user.family_name}}! <LogoutButton :client="auth0client" />
          </h1> 
        </div>
        <div class="teacher-page" v-else>
          <h1>
            You are currently not logged in. <LoginButton :client="auth0client" @login-complete="getUser()" />
          </h1>
        </div>
    </template>
  </ParentLayout>
</template>

<script>
import auth from "../../auth";
import LoginButton from "../components/LoginButton.vue";
import LogoutButton from "../components/LogoutButton.vue";
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
  data() {
    return {
      auth0client : null,
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
    LoginButton,
    LogoutButton,
    ParentLayout
  },  

  async mounted(){
    this.auth0client = await auth.createClient();
    this.user = await this.auth0client.getUser();
  },

  methods : {
    async login () {
      await auth.loginWithPopup(this.auth0client);
    },
    async getUser(){
      this.user = await this.auth0client.getUser();
    },
    redirect(){
      if (this.user){
      window.location = "http://localhost:8080/lessons/";
    }
    else {
      window.location = "http://localhost:8080/login/";
    }
    }
    
  }
}
</script>

<style>
.teacher-page {
  padding: 2rem;
}
</style>