<template>
  <div class="container">
    <div class="header">
      <div class="nav-top">
        <img
          @click="
            () => {
              this.$router.go(-1);
            }
          "
          src="../../static/images/zuojiantou.png"
          alt=""
        />
        <p>H5 Online Game</p>
        <p>&nbsp;&nbsp;</p>
      </div>
      <div class="nav-game">
        <p class="">GAME</p>
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
export default {
  data() {
    return {
      navIndex: 0
    };
  }
};
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
    width: 3.5rem;
    height: 0.5rem;
    background: #85be01;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.08rem;
    margin: 0.12rem auto 0;
    padding: 0 0.1rem;
    img {
      width: 0.25rem;
      height: 0.25rem;
    }
    p {
      font-size: 0.2rem;
      color: #fff;
      font-family: Wawati SC;
    }
  }
  .nav-game {
    height: 0.5rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    p {
      height: 0.5rem;
      line-height: 0.5rem;
      display: inline-block;
      font-size: 0.14rem;
      margin: 0 0.2rem;
      &:last-child {
        margin-right: 0.2rem;
      }
    }
  }
}

.content {
  flex: 1;
  overflow-y: scroll;
}
</style>
