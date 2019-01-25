<!--Template section-->
<template>
  <div id="GameMenu">
    <div class="container">
        <h2><router-link to="newgame">newgame</router-link></h2>
        <h2><router-link to="loadgame">loadgame</router-link></h2>
        <h2><router-link to="credits">credits</router-link></h2>
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