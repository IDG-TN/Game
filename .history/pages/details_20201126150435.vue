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
        // backgroundImage: `url(${this.$route.query.data.img})`,
        background: url("../static/images/logo.svg") no-repeat 3.47rem 1.4rem,
        backgroundRepeat: ",
        backgroundSize: "
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
  #back {
    width: 3.47rem;
    height: 1.4rem;
    position: absolute;
    top: 0;
    left: 0;
    // filter: blur(7rem);
  }
}
</style>
