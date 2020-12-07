<template>
  <div class="container">
    <div class="header">
      <img src="../static/images/home.png" alt="" />
      <img src="../static/images/logo.svg" alt="" />
      <img src="../static/images/china.png" alt="" />
    </div>
    <div class="section">
      <div class="back-banner">
        <div :style="note" id="back"></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import "../static/css/header.scss";
export default {
  created() {
    // console.log(this.$route.query.data);
    // this.img = this.$route.query.data.img;
  },
  data() {
    return {
      img: "",
      note: {
        background: "url(../static/images/china.png) no-repeat"
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

#bg-blur {
   background: url('../assets/img/hb2.jpg');
   height: 100%;
   width: 100%;
   float: left;
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   filter: blur(19px);

  #back {
    width: 3.47rem;
    height: 1.4rem;
    position: absolute;
    top: 0;
    left: 0;
    background: red;
    // filter: blur(7rem);
  }
}
</style>
