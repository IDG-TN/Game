<template>
  <div class="container">
    <div class="header">
      <img src="../static/images/home.png" alt="">
      <img src="../static/images/logo.svg" alt="">
      <img src="../static/images/china.png" alt="">
    </div>
    <div class="section">
      <div class="nav-title-sec">
        <a href=""><img src="../static/images/new.svg" alt=""><span>最新游戏</span></a>
        <a href=""><img src="../static/images/feature.svg" alt=""><span>特色游戏</span></a>
        <a href=""><img src="../static/images/hot.svg" alt=""><span>热门游戏</span></a>
      </div>
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
body{
  background: #eee;
}
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
  .nav-title-sec{
    width: 3.5rem;
    height: 0.45rem;
    background: #ffffff;
    border-radius: 0.08rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.1rem;
    border: 1px solid #ddd;
    a{
      display: inline-block;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 0.73rem;
      height: 0.28rem;
      margin-left: 0.2rem;
      img{
        width:0.2rem;
        height: 0.2rem;
      }
      span{
        font-size: 0.12rem;
      }
    }
  }
}

</style>
