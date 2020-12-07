<template>
  <div class="container">
    <Header></Header>
    <div class="section">
      <div class="nav-title-sec">
        <p @click="posiGoRefs(0)">
          <img src="../static/images/new.svg" alt="" /><span>New Games</span>
        </p>
        <p @click="posiGoRefs(1)">
          <img src="../static/images/feature.svg" alt="" /><span>FEATUREO</span>
        </p>
        <p @click="posiGoRefs(2)">
          <img src="../static/images/hot.svg" alt="" /><span>Hot Games</span>
        </p>
      </div>
      <h2 class="newGames">
        <span class="fy">New Games</span>
        <span @click="goHome('/page')">more</span>
      </h2>
      <div class="game-list-sec">
        <nuxt-link
          v-for="(item, index) in pageGameList"
          :key="index"
          :to="{ path: '/details', query: { data: item } }"
        >
          <dl>
            <dt>
              <img :src="item.img" alt="" />
            </dt>
            <dd>
              <p>{{ item.name }}</p>
              <p>
                <img src="../static/images/icon.png" alt="" />
                <span>{{ item.hot }}</span>
              </p>
            </dd>
          </dl>
        </nuxt-link>
      </div>
      <h2 class="feat">
        <span>FEATUREO</span><span @click="goHome('/page')">more</span>
      </h2>
      <div class="game-list-sec">
        <nuxt-link
          v-for="(item, index) in pageGameList"
          :key="index"
          :to="{ path: '/details', query: { data: item } }"
        >
          <dl>
            <dt>
              <img :src="item.img" alt="" />
            </dt>
            <dd>
              <p>{{ item.name }}</p>
              <p>
                <img src="../static/images/icon.png" alt="" />
                <span>{{ item.hot }}</span>
              </p>
            </dd>
          </dl>
        </nuxt-link>
      </div>
      <h2 class="hotGames">
        <span>Hot Games</span><span @click="goHome('/page')">more</span>
      </h2>
      <div class="game-list-sec">
        <nuxt-link
          v-for="(item, index) in pageGameList"
          :key="index"
          :to="{ path: '/details', query: { data: item } }"
        >
          <dl>
            <dt>
              <img :src="item.img" alt="" />
            </dt>
            <dd>
              <p>{{ item.name }}</p>
              <p>
                <img src="../static/images/icon.png" alt="" />
                <span>{{ item.hot }}</span>
              </p>
            </dd>
          </dl>
        </nuxt-link>
      </div>
      <div class="game-crosswise">
        <div class="game-overflow">
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
          <img
            src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg"
            alt=""
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import pageGameList from "../static/game/game.json";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get("/list");
    return { pageList: data };
  },
  created() {
    var test = "[{'name':'zhangsan'}]";
    console.log("(" + test + ")");
    let as = eval("(" + this.pageList + ")")
    console.log
  },
  data() {
    return {
      //页面数据
      pageGameList: [],
      pageList: ""
    };
  },
  components: {
    Footer,
    Header
  },
  methods: {
    /*
     * 路由跳转
     */
    goHome(val) {
      this.$router.push(val);
    },
    /**
     * 点击跳转到节点
     */
    posiGoRefs(val) {
      switch (val) {
        case 0:
          this.scrollToView(".newGames");
          break;
        case 1:
          this.scrollToView(".feat");
          break;
        case 2:
          this.scrollToView(".hotGames");
          break;
        default:
          break;
      }
    },
    /**
     * 跳转到对应节点
     */
    scrollToView(val) {
      document.querySelector(val).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
h2 {
  font-size: 0.14rem;
  height: 0.5rem;
  font-weight: 400;
  color: #111111;
  margin: 0 0.02rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    &:nth-of-type(2) {
      color: rgb(107, 107, 107);
      cursor: pointer;
    }
  }
}
.container {
  width: 3.47rem;
  margin: 0.12rem auto;
}
.game-list-sec {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 0.15rem;
  dl {
    width: 1rem;
    height: 1.49rem;
    background: #fff;
    border-radius: 0.06rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.1rem;
    dt {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 0.04rem;
      img {
        width: 0.9rem;
        height: 0.9rem;
        border-radius: 0.06rem;
      }
    }
    dd {
      width: 0.9rem;
      margin: 0.08rem auto;
      p:nth-of-type(1) {
        width: 0.9rem;
        height: 0.16rem;
        text-overflow: ellipsis;
        white-space: initial;
        overflow: hidden;
        color: #333;
        font-size: 0.12rem;
      }
      p:nth-of-type(2) {
        width: 0.93rem;
        margin-top: 0.03rem;
        height: 0.19rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 0.14rem;
          height: 0.14rem;
        }
        span {
          color: #6e6e6e;
          font-size: 0.12rem;
        }
      }
    }
  }
}
.nav-title-sec {
  width: 3.5rem;
  height: 0.45rem;
  background: #ffffff;
  border-radius: 0.06rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.1rem;
  border: 1px solid #ddd;
  position: sticky;
  left: 0;
  top: 0;
  p {
    display: inline-block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 0.28rem;
    margin-left: 0.1rem;
    img {
      width: 0.2rem;
      height: 0.2rem;
    }
    span {
      font-size: 0.12rem;
      color: #666;
      margin-left: 0.04rem;
    }
    &:nth-of-type(1) {
      margin: 0;
    }
  }
}
.game-crosswise {
  width: 3.75rem;
  height: 2.6rem;
  background: #fff;
  margin: 0.3rem 0 0 -0.14rem;
  overflow: hidden;
  .game-overflow {
    width: 10rem;
    height: 2.6rem;
    transform: translatex(200);
    animation: game-s linear 20s infinite alternate;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
    img {
      margin: 0 0.04rem;
      width: 0.76rem;
      height: 0.76rem;
      border: 1px solid #ccc;
      border-radius: 0.06rem;
    }
  }
}
@keyframes game-s {
  form {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-300px);
  }
}
</style>
