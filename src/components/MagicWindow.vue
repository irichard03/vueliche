<!--Template section-->
<template>
  <div class="magicWindow">
    <div id="container">
        <p>Spells</p>
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
};

</script>

<!--style section-->
<style>
    p {
        color: white;
    }

     .magicWindow {
        display: inline-block;
        width: 294px;
        height: 196px;
        background-color: violet;
        border: white solid 2px;
        border-radius: 2px;
    }
</style>