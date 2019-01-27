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
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"

export default {
  name: 'SignUp',
  data() {
    return {
      user: {
        email: "",
        password: "",
        passwordConfirm: ""
      }
    }
  },
  methods: {
    handleFormSubmit: function(){
      alert(this.user.email);
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