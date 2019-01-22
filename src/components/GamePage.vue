<!--Template section-->
<template>
  <div class="GamePage">
    <div id="container">
       <GameMenu />
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"
import GameMenu from './GameMenu.vue';
export default {
 name: 'GamePage',
  components: {
    GameMenu,
  },
};

</script>

<!--style section-->
<style>
.container {
  background-color: black;
}

</style>
