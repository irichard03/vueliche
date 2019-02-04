<!--Template section-->
<template>
  <div class="playerStats">
    <div id="container">
        <h1 class="statsText">Stats</h1>
        <div id="lifeForce">Life Force: {{displayLifeForce}}</div>
        <div id="spellPower">Spell Power: {{displaySpellpower}}</div>
        <div id="skullTokens">Skull Tokens: {{displaySkullTokens}}</div>
        <div id="knownSpells">Known Spells: {{displayKnownSpells}}</div>
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
  computed: {
    displayLifeForce(){
      return this.$store.state.stats.lifeForce;
    },
   displaySpellpower(){
     return this.$store.state.stats.spellPower;
   },
   displaySkullTokens(){
     return this.$store.state.stats.skullTokens;
   },
   displayKnownSpells(){
     return this.$store.state.stats.knownSpells;
   }
    
  }
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
        background-image: linear-gradient(black, #340004);
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
      position:absolute;
      margin-left: 84px;
      margin-top: -8px;
      height: 140px;
      width: 70px;
      border: 2px groove wheat;
    }
    .leftSkelly {
      position:absolute;
      margin-left: -1144px;
      margin-top: -8px;
      height: 140px;
      width: 70px;
       border: 2px groove wheat;
    }

    #lifeForce {
      width: 150px;
      position: absolute;
      margin-left: 60px;
      margin-top: 160px;
      border: groove 1px red;
      padding: 6px;
    }

    #spellPower {
      width: 150px;
      position: absolute;
      margin-left: 60px;
      margin-top: 200px;
      border: groove 1px red;
      padding: 6px;
    }

    
    #skullTokens {
      width: 150px;
      position: absolute;
      margin-left: 60px;
      margin-top: 240px;
      border: groove 1px red;
      padding: 6px;
    }

    #knownSpells {
      width: 150px;
      position: absolute;
      margin-left: 60px;
      margin-top: 280px;
      border: groove 1px red;
      padding: 6px;
    }
</style>