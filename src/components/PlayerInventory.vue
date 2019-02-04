<!--Template section-->
<template>
  <div class="playerInventory">
    <div id="container">
        <h1 class="inventoryText">Inventory</h1>
     
            <img class="inventory" v-bind:src="inventoryDisplay" />
            <img class="hat" v-bind:src="hatDisplay" />
            <img class="staff" v-bind:src="staffDisplay" />
            <img class="cape" v-bind:src="capeDisplay" />
            <img class="leftSkull" src="leftSkull.png" />
            <img class="rightSkull" src="rightSkull.png" />
        
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"



export default {
 name: 'PlayerInventory',
  components: {
  },
  computed: {
      inventoryDisplay(){
          return this.$store.state.inventory.image;
      },
       hatDisplay(){
          return this.$store.state.inventory.hat;
      },
      staffDisplay(){
          return this.$store.state.inventory.staff;
      },
       capeDisplay(){
          return this.$store.state.inventory.cape;
      },
  }
};

</script>

<!--style section-->
<style>
    p {
        size: 1.5em;
        color: white;
    }
    .inventory {
        width: 180;
        height: 180px;
        margin-top: 180px;
        border: solid 1px gold;
        border-radius: 4px;
    }
    .hat {
        position: fixed;
        width: 60px;
        height: 60px;
        margin-top: 100px;
        margin-left: -84px;
        border: green solid 1px;
    }
    .staff {
        position: fixed;
        margin-top: 220px;
        margin-left: -186px;
        width: 60px;
        height: 60px;
        border: green solid 1px;
    }
    .cape {
        position: fixed;
        margin-top: 220px;
        margin-left: 10px;
        width: 60px;
        height: 60px;
        border: green solid 1px;
    }
    .playerInventory {
        float: left;
        width: 294px;
        height: 396px;
        align-content: left;
        background-color: black;
        border: wheat groove 2px;
        border-radius: 2px;
    }
     .inventoryText {
        position: absolute;
        margin-top: 30px;
        margin-left: 80px;
        color: white;
    }

    .leftSkull{
        position: fixed;
        height: 100px;
        width: 100px;
        margin-left: 40px;
        margin-top: -40px;
    }
    .rightSkull {
        position: fixed;
        height: 100px;
        width: 100px;
        margin-left: 730px;
        margin-top: -40px;
    }
</style>