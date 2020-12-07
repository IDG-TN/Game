<template>
  <div class="container">
    <div class="header">
      <img src="../static/images/home.png" alt="" />
      <img src="../static/images/logo.svg" alt="" />
      <img src="../static/images/china.png" alt="" />
    </div>
    <div class="section">
      <div class="back-banner" :style="note">
        <div></div>
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
        backgroundImage: `url(${this.$route.query.data.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "3.47rem 1.4rem"
      }
    };
  }
};
</script>

<style lang="scss">
.back-banner{
  width: 3.47rem;
  height:1.4rem;
}
</style>
