<template>
  <div class="container">
    <div class="header">
      <img src="../static/images/home.png" alt="">
      <img src="../static/images/logo.svg" alt="">
      <img src="../static/images/china.png" alt="">
    </div>
    <div class="section">
      .nav-title
    </div>
    <div class="footer">

    </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container{
  width: 3.47rem;
  margin: 0.12rem auto;
  .header{
    width: 100%;
    height: 0.53rem;
    border-radius: 0.08rem;
    background-color: #85be01;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.08rem;
    img:nth-of-type(1){
      width: 0.32rem;
      height: 0.32rem;
    }
    img:nth-of-type(2){
      width: 1.7rem;
      height: 0.38rem;
    }
    img:nth-of-type(3){
      width: 0.32rem;
      height: 0.21rem;
      border-radius: 0.04rem;
    }
  }
  
}

</style>
