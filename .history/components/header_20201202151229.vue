<template>
  <div class="header">
    <img
      @click="goHome('/')"
      src="../static/images/home.png"
      :class="routePath == '/' ? 'hide' : ''"
      alt=""
    />
    <img @click="goHome('/')" src="../static/images/LogoWhalel.png" alt="" />
    <img src="../static/images/china.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      routePath: ""
    };
  },
  created() {
    this.routePath = this.$route.path;
  },
  methods: {
    goHome(val) {
      this.$router.(val);
    }
  }
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 0.53rem;
  border-radius: 0.08rem;
  background-color: #85be01;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.08rem;
  img:nth-of-type(1) {
    width: 0.26rem;
    height: 0.26rem;
  }
  img:nth-of-type(2) {
    width: 0.5rem;
    height: 0.38rem;
  }
  img:nth-of-type(3) {
    width: 0.32rem;
    height: 0.21rem;
    border-radius: 0.04rem;
    opacity: 0;
  }
}
.hide {
  opacity: 0;
}
</style>
