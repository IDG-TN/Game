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
        <p>
          <img
            @click="
              () => {
                this.$router.go(-1);
              }
            "
            src="../../static/images/logo.svg"
            alt=""
          />
        </p>
        <p>&nbsp;&nbsp;</p>
      </div>
      <div class="nav-game">
        <p
          v-for="(item, index) in navList"
          :key="index"
          :class="navIndex === item.id ? 'bor-nav-active' : ''"
          @click="changeIndexClass(item.id)"
        >
          {{ item.name }}
        </p>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navIndex: 0,
      navList: [
        {
          id: 0,
          name: "GAME"
        },
        {
          id: 1,
          name: "GAME"
        },
        {
          id: 2,
          name: "GAME"
        },
        {
          id: 3,
          name: "GAME"
        },
        {
          id: 4,
          name: "GAME"
        },
        {
          id: 5,
          name: "GAME"
        },
        {
          id: 6,
          name: "GAME"
        },
        {
          id: 7,
          name: "GAME"
        }
      ]
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
  .nav-top {
    width: 3.47rem;
    height: 0.53rem;
    background: #85be01;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.08rem;
    margin: 0.1rem auto 0;
    padding: 0 0.1rem;
    img {
      width: 0.25rem;
      height: 0.25rem;
    }
    p {
      font-size: 0.2rem;
      color: #fff;
      font-family: Wawati SC;
      font-weight: 600;
      img {
        width: 1.7rem;
        height: 0.38rem;
      }
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
