<!--Template section-->
<template>
  <div class="GamePage">
    <div id="container">
      <GameMenu v-if="loggedIn" />
      <SignIn v-if="exists" />
      <SignUp v-if="!authorized && !signedIn" />
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"
import GameMenu from '@/components/GameMenu.vue';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';


export default {
 name: 'GamePage',
  components: {
    SignIn,
    SignUp,
    GameMenu
  },
  
  computed: {
    authorized() {
      return this.$store.state.authenticated;
    },
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    exists() {
      return this.$store.state.exists;
    }
  },
  created: function () {
    //localStorage.setItem( "authcode", "thisIsMyAuthCode");
    localStorage.setItem("auth", "blah123");
    const auth = localStorage.getItem("auth");
    if(auth){
      this.state.$store.authenticated = true;
    }
    else {
      alert("Not authorized");
    }    
  }
};

</script>

<!--style section-->
<style>


</style>
