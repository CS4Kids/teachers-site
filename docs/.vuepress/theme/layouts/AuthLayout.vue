<template>
  
  <div class="main-content">
    <div v-if="user">
      <p align="center">
        Hi {{user.given_name}} {{user.family_name}}, Welcome to the Vuepress Blog
      </p>
      <p align="center">
        <LogoutButton :client="auth0client" />
      </p>
    </div>
    <div v-else>
      <p align="center">
        You are currently not logged in to the Application. Please use the login button below to sign in
      </p>
      <p align="center">
        <LoginButton :client="auth0client" @login-complete="getUser()" />
      </p>
    </div>
  </div>

</template>

<script>
import auth from "../../auth";
import LoginButton from "../components/LoginButton.vue";
import LogoutButton from "../components/LogoutButton.vue";

export default {
  data() {
    return {
      auth0client : null,
      user : null
    }
  },
  components: {
    LoginButton,
    LogoutButton,
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
    }
  }
}
</script>