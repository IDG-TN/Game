<template>
  <div class="header">
    <img
      @click="goHome('/')"
      src="../static/images/home.png"
      :class="this.$route.pash !== '/' ? 'hide' : 'show'"
      alt=""
    />
    <img @click="goHome('/')" src="../static/images/logo.svg" alt="" />
    <img src="../static/images/china.png" alt="" />
  </div>
</template>

<script>
export default {
    data(){
        return{
            route
        }
    }
  created() {
    this.goHome();
  },
  methods: {
    goHome(val) {
      this.$router.push(val);
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
    width: 0.32rem;
    height: 0.32rem;
  }
  img:nth-of-type(2) {
    width: 1.7rem;
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
.show {
  opacity: 1;
}
</style>
