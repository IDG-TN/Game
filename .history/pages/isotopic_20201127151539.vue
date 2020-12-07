<template>
  <div class="game-carrier">
    <div class="game-posi" @click="popupAddevenet">
      <img
        src="../static/images/menu.png"
        alt=""
        :class="popupIndex ? 'entryTransform' : ''"
      />
    </div>
    <div :class="popupIndex ? 'addStyleTransform' : ''" class="game-menu">
      <p
        @click="
          () => {
            this.$router.go(-1);
          }
        "
      >
        <img src="../static/images/fanhui.png" alt="" />
        <span>BACK</span>
      </p>
      <p @click="reloadGamePage()">
        <img src="../static/images/zhongzhi.png" alt="" />
        <span>RELOAD</span>
      </p>
    </div>
    <iframe
      id="some_frame_id"
      :src="src"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupIndex: false,
      src:
        "https://html5.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50/"
    };
  },
  created() {
    let hashH = document.documentElement.scrollHeight; //获取自身高度
    let urlC = this.src; //设置iframeA的src
    document.getElementById("some_frame_id").src = urlC + "#" + hashH; //将高度作为参数传递
  },
  methods: {
    popupAddevenet() {
      this.popupIndex = !this.popupIndex;
    },
    reloadGamePage() {
      let ifname = document.querySelector("#some_frame_id");
      ifname.src = ifname.src;
    }
  }
};
</script>

<style lang="scss" scoped>
#some_frame_id {
  width: 3.75rem;
  height: 100%;
}
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
    transition: all 0.4s;
  }
}
.game-menu {
  width: 0.45rem;
  height: 1.2rem;
  background: #fff;
  position: absolute;
  left: -0.47rem;
  top: 1.5rem;
  border-radius: 0 0.1rem 0.1rem 0;
  transition: all 0.4s;
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
.addStyleTransform {
  transform: translate(0.47rem);
}
.entryTransform {
  transform: rotate(-90deg);
}
</style>
