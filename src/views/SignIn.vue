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
</style>