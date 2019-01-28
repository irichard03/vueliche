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
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"
const axios = require("axios");
export default {
  name: 'SignUp',
  data() {
    return {
      user: {
        email: "",
        password: "",
        passwordConfirm: ""
      },
      result: null
    }
  },
  methods: {
    handleFormSubmit: function(){
      alert(this.user.email);
      axios.post("/checkuser", {email: this.user.email} ).then( function(response){
        // eslint-disable-next-line
        console.log(response);
      }).catch((error) => {
       throw error;
      });
    }
  }
}

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
 
</style>