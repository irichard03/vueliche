<!--Template section-->
<template>
  <div class="PlayGame">
    <div id="container">
        <div class="displayZone">
            
            <div class="topComponents">
                <PlayerInventory />
                <DungeonDisplay />
                <PlayerStats /> 
            </div>

            <div class="bottomComponents">
                 <TargetWindow />
                 <MessageWindow />
                 <MagicWindow />
            </div>
        </div>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"
import PlayerInventory from "@/components/PlayerInventory.vue"
import DungeonDisplay from "@/components/DungeonDisplay.vue"
import PlayerStats from "@/components/PlayerStats.vue"
import TargetWindow from "@/components/TargetWindow.vue"
import MessageWindow from "@/components/MessageWindow.vue"
import MagicWindow from "@/components/MagicWindow.vue"


export default {
 name: 'GamePage',
  components: {
      PlayerInventory,
      DungeonDisplay,
      PlayerStats,
      TargetWindow,
      MessageWindow,
      MagicWindow
      
  },
  computed: {
    authorized() {
      return this.$store.state.authenticated;
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
        margin-left:auto;
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

</style>
