<!--Template section-->
<template>
  <div class="GamePage">
    <div id="container">
       <GameMenu v-if="authenticated" />
       <SignUp v-if="!authenticated" />
       <h1>Is my state working?</h1>
       <div>{{count}}</div>
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
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};

</script>

<!--style section-->
<style>


</style>
