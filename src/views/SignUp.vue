<!--Template section-->
<template>
  <div id="SignUp">
    <div class="container">
      <h2>Please Register</h2>
      <form @submit.prevent="handleFormSubmit">
        <input v-model="user.email" class="input" placeholder="vue@lich.com">
        <input v-model="user.password" class="input" placeholder="password">
        <input v-model="user.passwordConfirm" class="input" placeholder="confirm password">
        <button type="submit">Submit</button>
      </form>
      <router-link to="/signin">Sign In</router-link>
      <h3>{{displayMessenger}}</h3>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        email: "",
        password: "",
        passwordConfirm: ""
      }
    };
  },
  methods: {
    handleFormSubmit: function() {
      // eslint-disable-next-line
      console.log(
        "password:" +
          this.user.password +
          "\nConfirm:" +
          this.user.passwordConfirm
      );

      if (this.user.password != this.user.passwordConfirm) {
        alert("DOES NOT MATCH");
        this.$store.dispatch(
          "UpdateMessengerState",
          "Passwords do not match, please re-enter"
        );
      }
      this.$store.dispatch("register", this.user);
      alert("REGISTERED!");
    }
  },
  computed: {
    displayMessenger() {
      return this.$store.state.messenger;
    }
  },

  mounted: function() {
    localStorage.removeItem("auth");
  }
};
</script>

<!--style section-->
<style>
.input {
  display: inline-block;
  width: 75%;
  margin-top: 10%;
}

.container {
  background-color: black;
  border: darkslategray solid 1px;
  width: 400px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
}

h3 {
  color: white;
}
</style>