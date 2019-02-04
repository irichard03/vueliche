<!--Template section-->
<template>
  <div class="targetWindow">
    <div id="container">
        <div class="controlBox">
            <h1 class="controls">Travel</h1>
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

    controls{
        position: absolute;
        margin-top: -24px;
        color: white;
    }

     .targetWindow {
        float: left;
        width: 294px;
        height: 196px;
        background-color: #012a00;
        border: wheat solid 2px;
        border-radius: 2px;
    }

    .controlButton{
        width:64px;
        height:64px;
    }

    
    .controlButton:hover{
        width:64px;
        height:64px;
        background-color: greenyellow;
    }

    #North {
        position: absolute;
        margin-left: 110px;
        margin-top: -20px;
    }

    #South {
        position: absolute;
        margin-left: 110px;
        margin-top: 44px;
    }

    #East {
        position: absolute;
        margin-left:174px;
        margin-top: 14px;
    }
    
    #West {
        position: absolute;
        margin-left:46px;
        margin-top: 14px;
    }
</style>