<!--Template section-->
<template>
  <div class="container">
    <div id="app">
      <map1 />
    </div>
  </div>
</template>

<!--script section-->
<script>
import map1 from './components/map1.vue'

export default {
  name: 'app',
  components: {
    map1
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
