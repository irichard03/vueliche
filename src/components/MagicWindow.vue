<!--Template section-->
<template>
  <div class="magicWindow">
    <div id="container">
        <img class="spellBook" v-bind:src="spellDisplay" />
        <div class="spells">
            <h1 class="bookOfDead">Necronomicon</h1>
            <div class="page">
                <p class="spell">Chaos</p>
                <p class="spell">Doom</p>
                <p class="spell">Havok</p>
                <p class="spell">Slay</p>
            </div>
            <div class="page">
                <p class="spell">Raise</p>
                <p class="spell">Mummify</p>
                <p class="spell">Bloodpact</p>
                <p class="spell">Soul Rip</p>
            </div>
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
      }
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
    .page {
       
        float: left;
        width: 50%;

        
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
        background-color: black;
        border: gold groove 2px;
        border-radius: 2px;
        background-image: URL("../../public/spellbook.png");
    }
</style>