<template>
  <div class="game-carrier">
    <div class="game-posi">
        <img src="../static/images/menu.png" alt="" />
        <div class="game-menu">
            
        </div>  
    </div>
  </div>
  <!-- <iframe
    src="https://html5.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50/"
    frameborder="0"
    width="800px"
    height="600px"
    scrolling="no"
  ></iframe> -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.game-posi {
  width: 0.38rem;
  height: 0.35rem;
  background: #85be01;
  border-radius: 0 0.3rem 0.3rem 0;
  position: fixed;
  left: 0;
  top: 1rem;
  .game-menu{
      width: 0.4rem;
      height: 0.9rem;
      background: #85be01;
      position: absolute;
  }
  img {
    width: 0.26rem;
    height: 0.26rem;
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    right: 0;
    margin: auto;
  }
}
</style>
