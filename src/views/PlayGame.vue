<!--Template section-->
<template>
  <div class="PlayGame">
    <div id="container">
        <div class="displayZone">
            
            <div class="topComponents">
                <div class="inventory">
                </div>
                <div class="dungeon">
                </div>
                <div class="stats">
                </div>
            </div>

            <div class="BottomComponents">
                
                <div class="health">
                </div>

                <div class="messageWindow">
                </div>

                <div class="magic">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"



export default {
 name: 'GamePage',
  components: {
   
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
        height: 600px;
        background-color: darkcyan;
        border: white solid 1px;
        margin-left: auto;
        margin-right: auto;
    }
    .topComponents {
        
        width: 1298px;
        height: 400px;
        background-color: grey;
        border: black solid 1px;
        margin-left:auto;
        margin-right: auto;
    }

    .inventory {
        display: inline-block;
        width: 320px;
        height: 400px;
        background-color: yellow;
        border: red solid 1px;
    }

    .dungeon {
        display: inline-block;
        width: 600px;
        height: 400px;
        background-color: yellow;
        border: red solid 1px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .stats {
        display: inline-block;
        width: 320px;
        height: 400px;
        background-color: yellow;
        border: red solid 1px;
    }
</style>
