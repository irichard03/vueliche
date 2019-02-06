<!--Template section-->
<template>
  <div class="magicWindow">
    <div id="container">
      <img class="spellBook" v-bind:src="spellDisplay">
      <div class="spells">
        <h1 class="bookOfDead">Necronomicon</h1>
        <div id="chaosSpell"  v-on:click="castChaos" class="spells" v-if="chaosKnown">Chaos</div>
       <img id="chaosImage" v-if="chaosCast" v-bind:src="chaosSpellDisplay">
        
      </div>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"

export default {
  name: "MagicWindow",
  components: {},
  computed: {
    spellDisplay() {
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
    chaosCast(){
      return this.$store.state.stats.spells.chaosCast;
    },
     chaosSpellDisplay() {
      return this.$store.state.stats.spells.chaosImage;
    }
  },

  methods: {
    castChaos() {
        alert(this.$store.state.chaosCast
        )
        this.playSound("splash.mp3");
        setTimeout( () => {
           this.$store.dispatch("updateChaosState", false);
        }, 1000);
    },
    
    playSound(sound) {
      if (sound) {
        let audio = new Audio(sound);
        audio.play();
      }
      this.$store.dispatch("updateChaosState", true);
      
    }
  }
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

.spell:hover {
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
  float: left;
  width: 294px;
  height: 196px;
  background-color: #340004;
  border: wheat groove 2px;
  border-radius: 2px;
  
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

#doomSpell:hover,
#chaosSpell:hover,
#havokSpell:hover {
  color: greenyellow;
  cursor: pointer;
}

#chaos{
    position: absolute;
    margin-top: -400px;
    margin-left: -420px;
    height: 100px;
    width: 100px;
}

#chaosImage {
    position: absolute;
    width: 200px;
    height: 200px;
    margin-left: -600px;
    margin-top: -500px;
    animation-name: fireDrop;
    animation-duration: 1s;

}

@keyFrames fireDrop {
    0% {margin-top: -500px;}
    100% {margin-top: -360px;}
}

</style>