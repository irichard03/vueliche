<!--Template section-->
<template>
  <div id="GameMenu">
    <div class="container">
        <h1>Vue Liche</h1>
        <h2>Register</h2>
        <h2>New Game</h2>
        <h2>Load Game</h2>
        <h2>Quit</h2>
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

.menuItems {
    color: white;
    display: inline-block;
    width: 100%;
    margin-top: 5%;
    font-size: 1.5em;
    color: slategray;
}

</style>