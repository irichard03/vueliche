<!--Template section-->
<template>
  <div id="SignUp">
    <div class="container">
      <h2>Register</h2>
      <form @submit.prevent="handleFormSubmit">
        <label>Email</label>
        <input v-model="user.email" class="input" placeholder="vue@lich.com">
        <label>Password</label>
        <input v-model="user.password" class="input" placeholder="password">
        <label>Confirm Password</label>
        <input v-model="user.passwordConfirm" class="input" placeholder="confirm password">
        <button type="submit">Submit</button>
      </form>
      <div class="linkContainer">
         <h3 class="messenger">{{displayMessenger}}</h3>
        <router-link class="routerLink" to="/signin">Sign In</router-link>
      </div>
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
      this.playSound('BELLS.mp3');

      if (this.user.password != this.user.passwordConfirm) {
        alert("DOES NOT MATCH");
        this.$store.dispatch(
          "UpdateMessengerState",
          "Passwords do not match, please re-enter"
        );
      }
      else {
        this.$store.dispatch("register", this.user);
      }
    },

    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
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
  border: wheat groove 2px;
  width: 400px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.messenger {
  color: white;
}

.linkContainer {
  margin-top: 20px;
}

label,input, button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 4px;
}

button {
  width: 80px;
  margin-left: auto;
  margin-right: auto;
}

</style>