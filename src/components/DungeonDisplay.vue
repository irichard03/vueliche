<!--Template section-->
<template>
  <div class="dungeonDisplay">
    <div id="container">
      <img class="dungeon" v-bind:src="dungeonDisplay">
      <img class="opponent" v-if="!clearedCheck" v-bind:src="monsterDisplay">
      <img class="body" v-if="clearedCheck" v-bind:src="bodyDisplay">
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"

export default {
  name: "DungeonDisplay",
  computed: {
    dungeonDisplay() {
      return this.$store.state.rooms[this.$store.state.currentRoom].image;
    },
    monsterDisplay() {
      return this.$store.state.rooms[this.$store.state.currentRoom].monster;
    },
    bodyDisplay() {
      return this.$store.state.rooms[this.$store.state.currentRoom].body;
    },


    clearedCheck() {
      return this.$store.state.rooms[this.$store.state.currentRoom].cleared;
    },
  }
};
</script>

<!--style section-->
<style>
p {
  color: white;
}

.dungeon {
  float: left;
  width: 680px;
  height: 392px;
  margin-top: 2px;
  margin-left: 2px;
}

.dungeonDisplay {
  float: left;
  width: 684px;
  height: 396px;
  background-color: rgb(0, 95, 130);
  border: wheat groove 2px;
  border-radius: 2px;
}

.opponent {
  position: fixed;
  margin-left: -400px;
  margin-top: 150px;
  height: 100px;
  width: 100;
}

.bonus {
  position: fixed;
  margin-left: -480px;
  margin-top: 120px;
  height: 80px;
  width: 80px;
},

.body {
  position: fixed;
  margin-left: -400px;
  margin-top: 150px;
  height: 100px;
  width: 100px;
}

</style>