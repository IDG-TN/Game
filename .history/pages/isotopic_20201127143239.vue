<template>
  <div class="game-carrier">
    <div class="game-posi">
      <img src="../static/images/menu.png" alt="" />
    </div>
    <div class="game-menu">
      <p>
        <img src="../static/images/fanhui.png" alt="" />
        <span>BACK</span>
      </p>
      <p>
        <img src="../static/images/zhongzhi.png" alt="" />
        <span>RELOAD</span>
      </p>
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
  img {
    width: 0.26rem;
    height: 0.26rem;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
}
.game-menu {
  width: 0.4rem;
  height: 0.9rem;
  background: #85be01;
  position: absolute;
  left: 0;
  top: 0.4rem;
  border-radius: 0 0.1rem 0.1rem 0;
  p {
    width: 0.4rem;
    height: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      width: 0.26rem;
      height: 0.26rem;
    }
    span {
      display: block;
      font-size: 0.12rem;
      color: #111111;
    }
  }
}
</style>
