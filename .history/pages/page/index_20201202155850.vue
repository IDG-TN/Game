<template>
  <div class="container">
    <div class="headers">
      <div class="nav-top">
        <img
          @click="
            () => {
              this.$router.go(-1);
            }
          "
          src="../../static/images/home.png"
          alt=""
        />
        <img
          @click="
            () => {
              this.$router.go(-1);
            }
          "
          src="../../static/images/LogoWhalel.png"
          alt=""
        />
        <p></p>
      </div>
      <div class="nav-game">
        <p
          v-for="(item, index) in navList"
          :key="index"
          :class="navIndex == item ? 'bor-nav-active' : ''"
          @click="changeIndexClass(item)"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  created() {
    this.navList = JSON.parse(this.$route.query.titleList);
  },
  data() {
    return {
      navIndex: "puzzle",
      navList: []
    };
  },
  methods: {
    changeIndexClass(val) {
      this.navIndex = val;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 3.75rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.headers {
  width: 3.75rem;
  height: 1.2rem;
  display: flex;
  flex-direction: column;
  padding: 0.12rem auto 0;
  background: #fff;
  .nav-top {
    width: 3.47rem;
    height: 0.53rem;
    border-radius: 0.08rem;
    background-color: #85be01;
    padding: 0 0.08rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    img:nth-of-type(1) {
      width: 0.3rem;
      height: 0.3rem;
    }
    img:nth-of-type(2) {
      width: 0.5rem;
      height: 0.38rem;
    }
    p {
      width: 0.32rem;
      height: 0.32rem;
    }
  }
  .nav-game {
    height: 0.5rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;

    p {
      width: 2rem;
      height: 0.5rem;
      line-height: 0.5rem;
      display: inline-block;
      font-size: 0.14rem;
      margin: 0 0.2rem;
      transition: all 0.3s;
      &:last-child {
        margin-right: 0.2rem;
      }
    }
    .bor-nav-active {
      font-family: Wawati SC;
      transform: scale(1.2);
      color: #85be01;
    }
  }
}
.content {
  flex: 1;
  overflow-y: scroll;
}
</style>
