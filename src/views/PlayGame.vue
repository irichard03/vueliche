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

        <div class="soundTrap" @click.prevent="playSound('DANCEMAC.mp3')" v-if="notStarted">
          <h1>click to start</h1>
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
        var audio = new Audio(sound);
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
</style>
