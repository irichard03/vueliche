<!--Template section-->
<template>
  <div class="container">
    <div id="app">
      <div class="topNav">
        <ul>
          <div>
            <li id="github"><a href="https://github.com/irichard03/vueliche">Git</a></li>
            <li id="title"><a href="#">Vue Liche</a></li>
            <li id="vue"><a href="https://vuejs.org">Vue</a></li>
          </div>
        </ul>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<!--script section-->
<script>
export default {
  name: "app",

  created: function() {
    window.addEventListener("keydown", this.getInput);
  }
  
};
</script>

<!--style section-->
<style>
.container {
  background-color: black;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
}
h1 {
  margin-top: 0px;
  margin-bottom: 20px;
  height: 5%;
  font-size: 2em;
}
ul,li {
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
}

a {
  text-decoration: underline;
  color: gold;
}
a:hover {
  color: greenyellow;
}

label{
  padding: 20px;
}

</style>
