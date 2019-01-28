<!--Template section-->
<template>
  <div class="dungeonDisplay">
    <div id="container">
        <p>Map</p>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"



export default {
 name: 'DungeonDisplay',
  components: {
  },
};

</script>

<!--style section-->
<style>
    p {
        color: white;
    }

    .dungeonDisplay {
        display: inline-block;
        width: 684px;
        height: 396px;
        background-color: rgb(0, 95, 130);
        border: red solid 1px;
        margin-left: 4px;
        margin-right: 4px;
        border: white solid 2px;
        border-radius: 2px;
    }
</style>