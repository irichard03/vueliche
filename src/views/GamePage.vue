<!--Template section-->
<template>
  <div class="GamePage">
    <div id="container">
       <GameMenu v-if="authenticated" />
       <SignUp v-if="!authenticated" />
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"
import GameMenu from '@/components/GameMenu.vue';
import SignUp from '@/views/SignUp.vue';

export default {
 name: 'GamePage',
  components: {
    GameMenu,
    SignUp,
    //toDoRegister
    //toDoGameWindow
    
  },
  data(){
    return{
      authenticated: true
    }
  },


  
};

</script>

<!--style section-->
<style>


</style>
