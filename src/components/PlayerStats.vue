<!--Template section-->
<template>
  <div class="playerStats">
    <div id="container">
        <h1 class="statsText">Stats</h1>
        
        <img class="rightSkelly" src="rightHangingSkeleton.png"/>
        <img class="leftSkelly" src="leftHangingSkeleton.png"/>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"



export default {
 name: 'PlayerStats',
  components: {
  },
};

</script>

<!--style section-->
<style>
    p {
        color: white;
    }

      .playerStats {
        float: left;
        width: 294px;
        height: 396px;
        background-color: BLACK;
        border: wheat groove 2px;
        border-radius: 2px;
    }

     .statsText {
        position: absolute;
        margin-top: 30px;
        margin-left: 110px;
        color: white;
    }

    .rightSkelly {
      position:fixed;
      margin-top: -324px;
      margin-left: 86px;
      height: 140px;
      width: 70px;
    }
    .leftSkelly {
      position:fixed;
      margin-top: -324px;
      margin-left: -1140px;
      height: 140px;
      width: 70px;
    }
</style>