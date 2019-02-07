<!--Template section-->
<template>
  <div id="SignIn">
    <div class="container">
      <h2>Sign In</h2>
      <form @submit.prevent="handleFormSubmit">
        <label>Email</label>
        <input v-model="user.email" type="email" class="registration" placeholder="vue@liche.com">
         <label>Password</label>
        <input v-model="user.password" type="password" class="registration" placeholder="password">
        <button type="submit" class="login">Login</button>
      </form>
      <h3 class="messenger">{{displayMessenger}}</h3>
      <router-link to="/signup">Sign Up</router-link>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"

export default {
  name: "SignIn",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },

  computed: {
    displayMessenger() {
      return this.$store.state.messenger;
    }
  },

  methods: {
    handleFormSubmit: function() {
    
      if (!this.user.password && !this.user.email) {
        alert("Not user and not email triggered" );
        this.$store.dispatch(
          "updateMessengerState",
          "You must enter a username AND password."
        );
      } else if (!this.user.email) {
        alert("not email triggered");
        this.$store.dispatch(
          "updateMessengerState",
          "You must enter your email."
        );
      } else if (!this.user.password) {
         alert("not email triggered");
        this.$store.dispatch(
          "updateMessengerState",
          "You must enter your password."
        );
      }
      else {
        this.$store.dispatch("userLogin", this.user);
      } 
    }
  }
};
</script>

<!--style section-->
<style>
.registration {
  display: inline-block;
  width: 75%;
  margin-top: 10%;
}

.container {
  background-color: black;
  border: wheat groove 2px;
  width: 400px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
}
</style>