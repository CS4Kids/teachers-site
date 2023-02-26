
<template>
  <ParentLayout class="container">
    <template #page>
      
      <div class="body">
        <h1>Contact Us</h1>
        <div v-if="submitted">
        <p>
          Thank you for your email, I will get back to you as soon as I can.
        </p>
      </div>
      <div v-if="submitted">
        <p>
          Thank you for your email, I will get back to you as soon as I can.
        </p>
      </div>
      <div class="body grid-body">
        <article>
          <div class="text">
            <div class="grid-body form-container">
              <form
                id="contact"
                @submit.prevent="handleSubmit"
                netlify
                name="contact-me"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div>
                  <label
                    >First Name
                    <input
                      id="grid-first-name"
                      type="text"
                      :rules="rules"
                      v-model="firstName"
                      name="firstName"
                      required
                    />
                  </label>
                </div>

                <div>
                  <label
                    >Last Name
                    <input
                      id="grid-last-name"
                      type="text"
                      :rules="rules"
                      v-model="lastName"
                      name="lastName"
                      required
                  /></label>
                </div>

                <div>
                  <label
                    >Email Address
                    <input
                      id="grid-email"
                      type="email"
                      :rules="rules"
                      v-model="email"
                      name="email"
                      required
                  /></label>
                </div>

                <div>
                  <label
                    >Your Message
                    <textarea
                      cols="30"
                      rows="10"
                      id="grid-message"
                      type="text"
                      :rules="rules"
                      v-model="message"
                      name="message"
                      required
                    ></textarea>
                  </label>
                </div>

                <div>
                  <button type="submit" class="button" :disabled="!valid">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </article>
        <article>
          <div class="text">
            <div class="grid-body">
              <img
                alt="discovering a geode"
                src="/assets/art/geode.png"
              />
            </div>
          </div>
        </article>
      </div>
      </div>
    </template>
  </ParentLayout>
  <div class="footer">Jen Looper &copy; {{ now }}</div>

</template>

<script>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

export default {
  name: "ContactLayout",
  components: {
    ParentLayout,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      message: "",
      email: "",
      submitted: false,
      valid: true,
      rules: [
        (firstName) => !!firstName,
        (lastName) => !!lastName,
        (message) => !!message,
        (email) => !!email,
        (v) => !!v || "This field is required",
      ],
    };
  },
  computed: {
    now() {
      let date = new Date().getFullYear();
      return date;
    },
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contact-me",
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          message: this.message,
        }),
      })
        .then(() => {
          this.submitted = true;
        })
        .catch(() => {
          alert("Sorry, there seems to have been an error.");
        });
    },
  },
};
</script>