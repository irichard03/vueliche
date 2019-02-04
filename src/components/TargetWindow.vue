<!--Template section-->
<template>
  <div class="targetWindow">
    <div id="container">
        <div class="controlBox">
            <div id="North">
                <button class="controlButton" v-on:click="goNorth">N</button>
            </div>
             <div id="East">
                <button class="controlButton" v-on:click="goEast">E</button>
            </div>
             <div id="West">
                <button class="controlButton" v-on:click="goWest">W</button>
            </div>
             <div id="South">
                <button class="controlButton" v-on:click="goSouth">S</button>
            </div>
        </div>
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"



export default {
 name: 'TargetWindow',
  components: {
  },
  methods: {
    goNorth: function(){
        this.$store.dispatch("nextRoom", "North");
    },
    
    goEast: function(){
        this.$store.dispatch("nextRoom", "East");
    },

    goWest: function(){
        this.$store.dispatch("nextRoom", "West");
    },

    goSouth: function(){
        this.$store.dispatch("nextRoom", "South");
    } 
  }
};

</script>

<!--style section-->
<style>
    p {
        color: white;
    }
     .targetWindow {
        float: left;
        width: 294px;
        height: 196px;
        background-color: black;
        border: wheat solid 2px;
        border-radius: 2px;
    }

    .controlButton{
        width:64px;
        height:64px;
    }

    #North {
        position: absolute;
        margin-left: 110px;
        margin-top: 20px;
    }

    #South {
        position: absolute;
        margin-left: 110px;
        margin-top: 84px;
    }

    #East {
        position: absolute;
        margin-left:174px;
        margin-top: 56px;
    }
    
    #West {
        position: absolute;
        margin-left:46px;
        margin-top: 56px;
    }
</style>