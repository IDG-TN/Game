<template>
  <div class="container">
    <div class="header">
      <img src="../static/images/home.png" alt="" />
      <img src="../static/images/logo.svg" alt="" />
      <img src="../static/images/china.png" alt="" />
    </div>
    <div class="section">
      <div class="back-banner">
        <div id="back"></div>
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
  #back {
    background: url("../static/images/china.png");
  }
}
</style>
