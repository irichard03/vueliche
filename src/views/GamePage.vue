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
import GameMenu from '@/components/GameMenu.vue';
export default {
 name: 'GamePage',
  components: {
    GameMenu,
    //toDoRegister
    //toDoGameWindow
    
  },
};

</script>

<!--style section-->
<style>
.container {
 
}

</style>
