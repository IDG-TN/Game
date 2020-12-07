<template>
  <div class="container">
    <div class="header">
      <img src="../static/images/home.png" alt="" />
      <img src="../static/images/logo.svg" alt="" />
      <img src="../static/images/china.png" alt="" />
    </div>
    <div class="section">
      <!-- <img :src="img" alt="" /> -->
    </div>
  </div>
</template>

<script>
import "../static/css/header.scss";
export default {
  beforecreated() {
    console.log(JSON.parse(localStorage.getItem("detaDatails")));
    // this.img =  JSON.parse(localStorage.getItem('detaDatails')).img
  },
  data() {
    return {
      img: ""
    };
  }
};
</script>

<style></style>
