<template>
  <ParentLayout class="container">
    <template #page>
    
    <h1>Passcode Test</h1>

   

    <form id="app" @submit="checkForm" method="post">
  
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>

        <p>
          <label for="name">Passcode: </label>
          <input class="passcode-input" type="text" name="name" id="name" v-model="name">
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
const apiUrl = '/.netlify/functions/passcode?name=';

export default {
  name: "PasscodeLayout",
  components: {
    ParentLayout
  },
  data() {
    return {
      errors:[],
      name:''
    };
  },
  methods: {
    checkForm:function(e) {
      e.preventDefault();
      this.errors = [];
      if(this.name === '') {
        this.errors.push("Product name is required.");
      } else {
        fetch(apiUrl+encodeURIComponent(this.name))
        .then(async res => {
          if(res.status === 204) {
            alert('Ok!')
          } else if(res.status === 400) {
            let errorResponse = await res.json();
            this.errors.push(errorResponse.error);
          }
        });
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
