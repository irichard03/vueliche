<!--Template section-->
<template>
  <div class="magicWindow">
    <div id="container">
        <img class="spellBook" v-bind:src="spellDisplay" />
        <div class="spells">
            <h1 class="bookOfDead">Necronomicon</h1>
            <div id="doomSpell" class="spells" v-if="doomKnown">Doom</div>
            <div id="chaosSpell" class="spells" v-if="chaosKnown" >Chaos</div>
            <div id="havokSpell" class="spells" v-if="havokKnown">Havok</div>
            
        </div>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"



export default {
 name: 'MagicWindow',
  components: {
  },
  computed: {
      spellDisplay(){
          return this.$store.state.spellbook.image;
      },
      
      doomKnown() {
        return this.$store.state.stats.spells.doom;
    },
     chaosKnown() {
        return this.$store.state.stats.spells.chaos;
    },
    havokKnown() {
        return this.$store.state.stats.spells.havok;
    },
  },
};

</script>

<!--style section-->
<style>
    .bookOfDead {
        position: absolute;
        margin-top: -24px;
        color: white;
    }
  
    .spell {
        color: black;
    }

    .spell:hover{
        color: red;
        
    }

    .spellBook {
        margin-top: 10px;
        width: 294px;
        height: 190px;
    }
    .spells {
        position: absolute;
        margin-top: -184px;
        margin-left: 40px;
        width: 200px;
        text-align: center;
    }
     .magicWindow {
        float:left;
        width: 294px;
        height: 196px;
        background-color: #340004;
        border: wheat groove 2px;
        border-radius: 2px;
        background-image: URL("../../public/spellbook.png");
    }

    p {
        font-size: 12px;
    }

    #doomSpell {
        position: absolute;
        margin-top: 70px;
        margin-left: -60px;
    }

    #chaosSpell {
        position: absolute;
        margin-top: 30px;
        margin-left: -60px;
    }

     #havokSpell {
        position: absolute;
        margin-top: 30px;
        margin-left: 60px;
    }

    #doomSpell:hover,#chaosSpell:hover,#havokSpell:hover {
        color: greenyellow;
    }
</style>