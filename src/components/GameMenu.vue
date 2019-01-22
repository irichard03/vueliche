<!--Template section-->
<template>
  <div id="GameMenu">
    <div class="container">
        <h1><a>Vue Liche</a></h1>
        <h2><a href="http://google.com">Register</a></h2>
        <h2><a>New Game</a></h2>
        <h2><a>Load Game</a></h2>
        <h2><a>Quit</a></h2>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"

export default {
  name: 'GameMenu'
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

a {
    color: white;
    text-decoration: none;
}

a:link:hover {
    color: white;
 }

a {
    color:darkslategrey; 
}

</style>