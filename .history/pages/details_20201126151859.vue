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
        <div class="cont">content</div>
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
        backgroundImage: "url(" +this.$route.query.data.img+ ")",
        backgroundRepeat:"no-repeat"
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
  .back {
    width: 3.47rem;
    height: 1.4rem;
    filter:blur(5px);/*虚化值，越大越模糊*/
  }
  .cont{
    position: absolute;
    left: 0;
    top: 0;
  }
}

</style>
