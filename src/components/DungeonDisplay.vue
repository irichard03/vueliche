<!--Template section-->
<template>
  <div class="dungeonDisplay">
    <div id="container">
      <img class="dungeon" v-bind:src="dungeonDisplay" />
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"

export default {
 name: 'DungeonDisplay',
  computed: {
      dungeonDisplay(){
          return this.$store.state.rooms[0].image;
      }
  },
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
        border: red solid 1px;
      
        border: white solid 2px;
        border-radius: 2px;
    }
</style>