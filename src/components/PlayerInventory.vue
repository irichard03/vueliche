<!--Template section-->
<template>
  <div class="playerInventory">
    <div id="container">
        <p>Inventory</p>
        <img class="inventory" v-bind:src="inventoryDisplay" />
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
          return this.$store.state.inventory;
      },
  }
};

</script>

<!--style section-->
<style>
    p {
        color: white;
    }

    .playerInventory {
        float: left;
        width: 294px;
        height: 396px;
        align-content: left;
        background-color: purple;
        border: white solid 2px;
        border-radius: 2px;
    }
</style>