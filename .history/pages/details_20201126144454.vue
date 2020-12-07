<template>
  <div class="container">
    <div class="header">
      <img src="../static/images/home.png" alt="" />
      <img src="../static/images/logo.svg" alt="" />
      <img src="../static/images/china.png" alt="" />
    </div>
    <div class="section">
      <div class="back-banner" :style="note">
        <img src="" alt="" />
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
        backgroundImage: "url("+img+") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "25px auto",
        marginTop: "5px"
      }
    };
  }
};
</script>

<style lang="scss"></style>
