<template>
        <div id="playerDiv">
        <img id="player" 
            tabindex="1"
            v-on:keyup="showAlert('right')"
            src="logo.png"/>
        </div>
</template>

<script>
export default {
  name: 'PlayerSprite',
  props: {
      
  }
};
</script>

<style>
#playerDiv {
    margin-right: 400px;
    margin-top: -200px;
    position: absolute;
}
</style>