<!--Template section-->
<template>
  <div class="GamePage">
    <div id="container">
       <SignIn v-if="authorized" />
       <SignUp v-else />
       <h1>Is my state working?</h1>
       <div>{{authorized}}</div>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';

export default {
 name: 'GamePage',
  components: {
    SignIn,
    SignUp,
    //toDoRegister
    //toDoGameWindow
  },
  computed: {
    authorized() {
      return this.$store.state.authenticated;
    }
  }
};

</script>

<!--style section-->
<style>


</style>
