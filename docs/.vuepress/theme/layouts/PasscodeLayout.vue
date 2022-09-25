<template>
  <ParentLayout class="container form-container">
    <template #page>
    
    <h1>Passcode Test</h1>

    <form id="app" @submit="checkForm" method="post">
 
        <p v-if="messages.length">
          <ul>
            <li class="message" v-for="message in messages">{{ message }}</li>
          </ul>
        </p>

        <p>
          <label for="name">Passcode: </label>
          <input class="passcode-input" maxlength="10" type="password" name="queryPasscode" id="queryPasscode" v-model="queryPasscode">
        </p>

        <p>
          <input type="submit" value="Submit">  
        </p>

      </form>

    </template> 

  </ParentLayout>
      
</template>



<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
const apiUrl = '/.netlify/functions/passcode?queryPasscode=';

export default {
  name: "PasscodeLayout",
  components: {
    ParentLayout
  },
  data() {
    return {
      messages:[],
      queryPasscode:'',
    };
  },
  methods: {
    async checkForm(e) {
      e.preventDefault();
      this.messages = [];
      if(this.queryPasscode === '') {
        this.messages.push("Please enter a passcode");
      } else {
        const res = await fetch(apiUrl+encodeURIComponent(this.queryPasscode))
        let response = await res.text();
        this.messages.push(response);
      }
    }
   
              
   
  },
  
};
</script>

<style>
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