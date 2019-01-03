<!--Template section-->
<template>
  <div class="container">
    <div id="app">
      <TownMap />
      <PlayerSprite />
    </div>
  </div>
</template>

<!--script section-->
<script>
import TownMap from './components/TownMap.vue';
import PlayerSprite from './components/PlayerSprite.vue';

export default {
  name: 'app',
  components: {
    TownMap,
    PlayerSprite
  }
}
</script>

<!--style section-->
<style>
.container {
  background-color: black;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
</style>
