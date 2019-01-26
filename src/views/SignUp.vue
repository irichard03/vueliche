<!--Template section-->
<template>
  <div id="SignUp">
    <div class="container">
        <h2>Please Register</h2>
        <form id="registration">
          <input v-model="name" class="registration" placeholder="name">
          <input v-model="email" class="registration" placeholder="vue@lich.com">
          <input v-model="password" class="registration" placeholder="password">
          <input v-model="passwordConfirm" class="registration" placeholder="confirm password">
          <button class="registration">Submit</button>
        </form>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"

export default {
  name: 'SignUp'
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