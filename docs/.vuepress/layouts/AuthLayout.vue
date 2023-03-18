<template>
  <ParentLayout>
    <template #page>
      <main class="home">
        <h1 id="main-title" class="inner-title">Welcome, Teachers!</h1>
        <div class="features">
          <div class="feature">
            <form id="app" @submit="checkForm" method="post">
        <p v-if="messages.length">
          <ul>
            <li class="message" v-for="message in messages">{{ message }}</li>
          </ul>
        </p>
        <p>
          <label for="name">To access this area, please use a passcode. Use the Contact Us form to request the passcode if you are using this textbook in your classes.</label>
          <input class="passcode-input" maxlength="10" type="password" name="queryTeacherPasscode" id="queryTeacherPasscode" v-model="queryTeacherPasscode">
        </p>
        <p>
          <input type="submit" class="button" value="Submit">  
        </p>
        </form> 
          </div>
          <div class="feature hero">
            <img
                alt="Glowing Moss"
                :src="$withBase('./assets/art/moss.png')"
              />
          </div>
        </div>     
      </main>
      <div class="footer content-footer">Copyright © {{year}} Jen Looper </div> 
   </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
const apiUrl = "/.netlify/functions/teacher-login?queryTeacherPasscode=";

export default {
  data() {
    return {
      messages: [],
      queryTeacherPasscode: "",
    };
  },
  computed: {
    year() {
      let year = new Date().getFullYear();
      return year;
    },
  },
  components: {
    ParentLayout,
  },
  methods: {
    async checkForm(e) {
      e.preventDefault();
      this.messages = [];
      localStorage.setItem("logged-in", 'false');
      if (this.queryTeacherPasscode === "") {
        this.messages.push("Please enter a passcode");
      } else {
        const res = await fetch(
          apiUrl + encodeURIComponent(this.queryTeacherPasscode)
        );
        let response = await res.text();
        this.messages.push(response);
        if (this.messages[0] == "Passcode correct!") {
          localStorage.setItem("logged-in", 'true');
          window.location = "/lessons/";
        } else {
          localStorage.setItem("logged-in", 'false');
        }
      }
    },
  },
};
</script>

<style>
#app {
  min-height: 80vh;
}

.passcode-input {
  width:80%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  margin: 10px 0 10px;
  padding: 10px;
  color: black;
}
.message {
  color: red;
}
</style>