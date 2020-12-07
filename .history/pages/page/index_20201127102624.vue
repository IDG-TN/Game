<template>
  <div class="container">
    <div class="header">
      <div class="nav-top">
        <img src="../../static/images/zuojiantou.png" alt="" />
        <p>H5 Online Game</p>
        <p>&nbsp;&nbsp;</p>
      </div>
      <div class="nav-game">
        <p>GAME</p>
        <p>GAME</p>
        <p>GAME</p>
        <p>GAME</p>
        <p>GAME</p>
        <p>GAME</p>
        <p>GAME</p>
        <p>GAME</p>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container {
  width: 3.75rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  .nav-top {
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 0.25rem;
      height: 0.25rem;
    }
    p {
      font-size: 0.2rem;
      color: #85be01;
    }
  }
  .nav-game {
    height: 0.5rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    overflow-x:scroll;
    p {
      width: 0.8rem !;
      height: 0.5rem;
      line-height: 0.5rem;
      display: inline-block;
      font-size: 0.14rem;
    }
    
  }
}

.content {
  flex: 1;
  overflow-y: scroll;
}
</style>
