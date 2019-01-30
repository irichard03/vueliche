<!--Template section-->
<template>
  <div class="messageWindow">
    <div id="container">
        <p>Before you lies the abyss...</p>
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
};

</script>

<!--style section-->
<style>
    p {
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