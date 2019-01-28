<!--Template section-->
<template>
  <div class="GamePage">
    <div id="container">
      <PlayGame v-if="signed" />
      <SignIn v-if="authorized && !signed" />
      <SignUp v-if="!authorized && !signed" />
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"
import PlayGame from '@/views/PlayGame.vue';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';


export default {
 name: 'GamePage',
  components: {
    SignIn,
    SignUp,
    PlayGame
  },
  computed: {
    authorized() {
      return this.$store.state.authenticated;
    },
    signed() {
      return this.$store.state.loggedIn;
    }
  }
};

</script>

<!--style section-->
<style>


</style>
