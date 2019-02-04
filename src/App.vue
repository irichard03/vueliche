<!--Template section-->
<template>
  <div class="container">
    <div id="app">
      <div class="topNav">
        <ul>
          <li id="github">Git</li>
          <li id="title">Vue Liche</li>
          <li id="vue"><font-awesome-icon icon="coffee" /></li>
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
  },
  methods: {
    getInput: function(event) {
      if (event.key === "ArrowUp") {
        this.$store.dispatch("nextRoom", "North");
      } else if (event.key === "ArrowDown") {
        this.$store.dispatch("nextRoom", "South");
      } else if (event.key === "ArrowLeft") {
        this.$store.dispatch("nextRoom", "West");
      } else if (event.key === "ArrowRight") {
        this.$store.dispatch("nextRoom", "East");
      }
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
h1 {
  margin-top: 0px;
  margin-bottom: 20px;
  height: 5%;
  font-size: 2em;
}
ul,li {
  display: inline-block;
  width: 33%;
}
</style>
