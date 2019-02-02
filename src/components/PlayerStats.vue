<!--Template section-->
<template>
  <div class="playerStats">
    <div id="container">
        <h1 class="statsText">Stats</h1>
        <table>
          <table-head>
          </table-head>
          <tbody>
          <tr>
            <td>Vitae:</td>
            <td>20</td>
          </tr>
          <tr>
            <td>SpellPower:</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Experience:</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Skull Coins:</td>
            <td>0</td>
          </tr>
           <tr>
            <td>Spells:</td>
            <td>8/8</td>
          </tr>
          </tbody>
        </table>
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

    tbody {
      display: inline-block;
      color: white;
      margin-left: 50px;
      margin-top: 160px;
      font-size: 1.5em;
    }
  

      .playerStats {
        float: left;
        width: 294px;
        height: 396px;
        background-color: BLACK;
        border: gold groove 2px;
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