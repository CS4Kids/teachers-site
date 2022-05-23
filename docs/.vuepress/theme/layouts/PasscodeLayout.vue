<template>
  <ParentLayout class="container">
    <template #page>
    
    <h1>Passcode Test</h1>

    {{response}}

    <form id="app" @submit="checkForm" method="post">
 
        <p v-if="errors.length">
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>

        <p>
          <label for="name">Passcode: </label>
          <input class="passcode-input" type="text" name="queryPasscode" id="queryPasscode" v-model="queryPasscode">
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
      errors:[],
      queryPasscode:'',
      response: ''
    };
  },
  methods: {
    async checkForm(e) {
      e.preventDefault();
      this.errors = [];
      if(this.queryPasscode === '') {
        this.errors.push("Please enter a passcode");
      } else {
        const res = await fetch(apiUrl+encodeURIComponent(this.queryPasscode))
        this.response = res
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
    }
</style>
