<template>
  <ParentLayout class="container">
    <template #page-top>  
      <div class="form-container">
        <form id="app" @submit="checkForm" method="post">
        <p v-if="messages.length">
          <ul>
            <li class="message" v-for="message in messages">{{ message }}</li>
          </ul>
        </p>

        <p>
          <label for="name">To access this area, please use a passcode:</label>
          <input class="passcode-input" maxlength="10" type="password" name="queryPasscode" id="queryPasscode" v-model="queryPasscode">
        </p>

        <p>
          <input type="submit" class="button" value="Submit">  
        </p>

        </form>
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
const apiUrl = '/.netlify/functions/teacher-login?queryTeacherPasscode=';

export default {
  data() {
    return {
      messages:[],
      queryTeacherPasscode:'',
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
    async checkForm(e) {
      e.preventDefault();
      this.messages = [];
      if(this.queryTeacherPasscode === '') {
        this.messages.push("Please enter a passcode");
      } else {
        const res = await fetch(apiUrl+encodeURIComponent(this.queryTeacherPasscode))
        let response = await res.text();
        this.messages.push(response);
      }
    },
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
.passcode-input {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #FFF;
  margin: 10px 0 10px;
  padding: 10px;
  color: black;
}
.message {
  color: red;
}

</style>