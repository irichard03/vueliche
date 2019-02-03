<!--Template section-->
<template>
  <div class="GamePage">
    <div id="container">
      <GameMenu v-if="loggedIn"/>
      <SignIn v-if="authenticated"/>
      <SignUp v-if="!loggedIn && !authenticated"/>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"
import GameMenu from "@/components/GameMenu.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

export default {
  name: "GamePage",
  components: {
    SignIn,
    SignUp,
    GameMenu
  },

  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    },
    loggedIn() {
      return this.$store.state.loggedIn;
    }
  },
  created: function() {
    const auth = localStorage.getItem("auth");
    if (auth) {
      this.$store.dispatch("updateAuthState", true);
    } else {
      this.$store.dispatch("updateAuthState", false);
    }
  }
};
</script>

<!--style section-->
<style>
</style>
