<!--Template section-->
<template>
  <div class="messageWindow">
    <div id="container">
       <p class="messages">"{{descriptionDisplay}}"</p>
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
    }

      .messageWindow {
        float: left;
        width: 684px;
        height: 196px;
        background-color: blue;
        border: red solid 1px;
        
        border: 2px white solid;
        border-radius: 4px
    }
    
</style>