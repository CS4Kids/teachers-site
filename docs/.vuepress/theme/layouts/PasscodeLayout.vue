<template>
  <ParentLayout class="container">
    <template #page>
    
    <h1>Passcode Test</h1>

    <div v-if="submitted">
      <p>Passcode Accepted!</p>
    </div>

    <form
      id="form-passcode"
      @submit.prevent="handleSubmit"
      method="post"
    >
    
    
        <div>
          <label>Enter your passcode:
          <input
            id="grid-passcode"
            type="password"
            :rules="rules"
            v-model="passcode"
            name="passcode"
            required
          />
          </label>
        </div>
        
        
      
        <div>
          <button
            type="submit"
            :disabled="!valid"
          >
            Submit
          </button>
        </div>
      
    </form>
    </template> 

  </ParentLayout>
      
</template>



<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
  name: "PasscodeLayout",
  components: {
    ParentLayout
  },
  data() {
    return {
      passcode: "",
      submitted: false,
      valid: true,
      rules: [
        (passcode) => !!passcode,
        (v) => !!v || "This field is required",
      ],
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
   
  },
};
</script>

<style>
input {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: #FFF;
        margin: 10px 0 10px;
        padding: 10px;
    }
</style>
