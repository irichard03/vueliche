<!--Template section-->
<template>
  <div class="PlayGame">
    <div id="container">
      <div class="displayZone">
        <div class="topComponents">
          <PlayerInventory/>
          <DungeonDisplay/>
          <PlayerStats/>
        </div>

        <div class="bottomComponents">
          <TargetWindow/>
          <MessageWindow/>
          <MagicWindow/>
        </div>

        <div class="soundTrap" @click.prevent="playSound(!'DANCEMAC.mp3')" v-if="notStarted">
          <h1>Instructions:</h1>
          <p>Your last memory after contracting the plague was a strange skeletal creature standing over you with promises of eternal life...</p>
          <p>You have been transformed into a Liche, a powerful undead wizard, but your power comes at a terrible cost. Only the souls of the living can sustain you.</p>
          <h2>How to play</h2>
          <p>Use the arrow buttons on the left to travel, and the spell book on the right to destroy all that oppose you! Click on items in the window above to equip them, can you collect all 3 Liche Tokens?</p>
          <h2 class="clickMe">Click Here to Start</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"
import PlayerInventory from "@/components/PlayerInventory.vue";
import DungeonDisplay from "@/components/DungeonDisplay.vue";
import PlayerStats from "@/components/PlayerStats.vue";
import TargetWindow from "@/components/TargetWindow.vue";
import MessageWindow from "@/components/MessageWindow.vue";
import MagicWindow from "@/components/MagicWindow.vue";

export default {
  name: "GamePage",
  components: {
    PlayerInventory,
    DungeonDisplay,
    PlayerStats,
    TargetWindow,
    MessageWindow,
    MagicWindow
  },

  computed: {
    notStarted() {
      return this.$store.state.notStarted;
    }
  },
  methods: {
    
    playSound(sound) {
      
      if (sound) {
        let audio = new Audio(sound);
        audio.play();
      }
      this.$store.dispatch("updateGameState", false);
    }
  }
};
</script>

<!--style section-->
<style>
.displayZone {
  width: 1300px;
  height: 616px;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
}
.topComponents {
  width: 1298 px;
  height: 398 px;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
}

.bottomComponents {
  background-color: black;
  width: 1298px;
  height: 198px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2px;
}

.soundTrap {
  width: 680px;
  height: 400px;
  background: black;
  position: absolute;
  border-radius: 6px;
  border: groove 2px gold;
  margin-left: 300px;
}

p {
  margin-left: 32px;
  margin-right: 32px;
  font-size: 20px;
  text-align: left;
}

.clickMe:hover {
  color: greenyellow;
}
</style>
