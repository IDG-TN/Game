<template>
  <div class="game-carrier">
    <div class="game-posi" @click="popupAddevenet">
      <img src="../static/images/menu.png" alt="" />
    </div>
    <div class="game-menu" v-if="popupIndex">
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
export default {
  data() {
    return {
      popupIndex: true
    };
  },
  methods: {
    popupAddevenet() {
      this.popupIndex = !this.popupIndex;
    }
  }
};
</script>

<style lang="scss" scoped>
.game-carrier {
  width: 3.75rem;
  height: 100%;
}
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
  width: 0.45rem;
  height: 1.2rem;
  background: #fff;
  position: absolute;
  left: 0;
  top: 1.5rem;
  border-radius: 0 0.1rem 0.1rem 0;
  transition: ;
  p {
    width: 0.45rem;
    height: 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img {
      width: 0.22rem;
      height: 0.22rem;
    }
    span {
      font-size: 0.1rem;
      display: block;
      color: #111111;
    }
  }
}
</style>
