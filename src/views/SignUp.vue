<!--Template section-->
<template>
  <div id="SignUp">
    <div class="container">
        <h1>Please Register</h1>
        <h2>Name</h2>
        <h2>Email</h2>
        <h2>Password</h2>
        <button>Submit</button>
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
.container {
  background-color: black;
  border: darkslategray solid 1px;
  width: 400px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
}

h2,h1 {
    
    display: inline-block;
    width: 100%;
    margin-top: 5%;
    font-size: 1.5em;
    color: slategray;
}

</style>