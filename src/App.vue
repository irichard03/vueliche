<!--Template section-->
<template>
  <div class="container">
    <div id="app">
     <h1>Vue Liche</h1>
     <router-view/>
    </div>
  </div>
</template>

<!--script section-->
<script>
export default {
  name: 'app',
  
  created: function() {
    window.addEventListener("keydown",this.getInput);
  },
  methods: {
    getInput: function (event) {
      if(event.key === "ArrowUp") alert ("arrow up!");
      if(event.key === "ArrowDown") alert ("arrow down!");
      if(event.key === "ArrowLeft") alert ("arrow left!");
      if(event.key === "ArrowRight") alert ("arrow right!");
    }
  }
};

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
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
}
h1{
  margin-top: 0px;
  margin-bottom: 0px;
  height: 5%;
  font-size: 2em;
}
</style>
