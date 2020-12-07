<template>
  <div class="container">
    <div class="header">
      <img src="../static/images/home.png" alt="" />
      <img src="../static/images/logo.svg" alt="" />
      <img src="../static/images/china.png" alt="" />
    </div>
    <div class="section">
      <div class="back-banner">
        <div :style="note" class="back"></div>
        <div class="cont">
          <img src="../static/images/china.png" alt="" />
          <div class="cont-font">
            <p>EMOJI GAME</p>
            <p><img src="../static/images/icon.png" alt=""> 962K+ player</p>
            <p>PUZZLE</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../static/css/header.scss";
export default {
  created() {
    console.log(this.$route.query.data);
    this.img = this.$route.query.data.img;
  },
  data() {
    return {
      img: "",
      note: {
        backgroundImage: "url(" + require("../static/images/china.png") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      }
    };
  }
};
</script>

<style lang="scss">
.back-banner {
  width: 3.47rem;
  height: 1.4rem;
  position: relative;
  margin: 0.2rem auto;
  .back {
    width: 3.47rem;
    height: 1.4rem;
    filter: blur(3px); /*虚化值，越大越模糊*/
  }
  .cont {
    position: absolute;
    left: 0;
    top: 0;

    img:nth-of-type(1) {
      width: 0.7rem;
      height: 0.7rem;
      margin: 0.1rem 0 0 0.2rem;
    }
    .cont-font {
      width: 2.41rem;
      height: 0.5rem;
      p{
        font-size: 0.16rem;
        color: #fff;
        img{
          width: 0.3rem;
          height: 0.3rem;
        }
      }
    }
  }
}
</style>
