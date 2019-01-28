<!--Template section-->
<template>
  <div id="SignIn">
    <div class="container">
        <h2>Please Register</h2>
        <form id="login">
          <input v-model="name" type="text" class="registration" placeholder="name">
          <input v-model="password" type="password" class="registration" placeholder="password">
          <button type="submit" class="login">Login</button>
        </form>
         <router-link to="/signup">Sign Up</router-link>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"

export default {
  name: 'SignIn'
}

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
    border: darkslategray solid 1px;
    width: 400px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
 }
 
</style>