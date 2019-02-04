<!--Template section-->
<template>
  <div class="messageWindow">
    <div id="container">
       <marquee behavior="scroll" class="messages" direction="up" scrollamount="1">{{descriptionDisplay}}</marquee>

       
    </div>
  </div>
</template>

<!--script section-->
<script>
//import ComponentName from "path"



export default {
 name: 'MessageWindow',
  components: {
  },

  computed: {
    descriptionDisplay(){
          return this.$store.state.rooms[this.$store.state.currentRoom].description;
      }
  }

  

};

</script>

<!--style section-->
<style>
    .messages {
        color: white;
        height: 180px;
        margin-left: 20px;
        margin-right: 20px;
        text-align: left;
        font-size: 1.5em;
    }

      .messageWindow {
        float: left;
        width: 684px;
        height: 196px;
        background-color: blue;
        border: red solid 1px;
        background-image: linear-gradient(blue,#002b3d);
        border: 2px wheat solid;
        border-radius: 4px
    }
    
</style>