<template>
  <div class="container">
    <Header></Header>
    <div class="section">
      <div class="back-banner">
        <div :style="note" class="back"></div>
        <div class="cont">
          <img :src="cData.img" alt="" />
          <div class="cont-font">
            <p>{{ cData.name }}</p>
            <p>
              {{ cData.hot }} <img src="../static/images/icon.png" alt="" />
            </p>
            <p><span>★★★★★</span> {{ cData.star }}</p>
            <p>{{ cData.categories }}</p>
          </div>
        </div>
      </div>
      <div class="button-start" @click="goGamePage()">
        <p>
          <img
            class="img-transi-delay"
            src="../static/images/play.svg"
            alt=""
          />
          &nbsp;PLAY NOW
        </p>
      </div>
      <div class="similar-head">
        <img src="../static/images/more.svg" alt="" />
        <span>相关游戏</span>
      </div>
      <div class="game-list-sec standby">
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
      <div class="details-info">
        <h2>{{ cData.name }}</h2>
        <p>
          {{ cData.description }}
        </p>
        <h3>Type of play</h3>
        <ol>
          <li v-for="(item, index) in cData.tag" :key="index">{{ item }}</li>
        </ol>
        <h3>Size</h3>
        <p>{{ cData.dimensions }}</p>
        <h3>Time</h3>
        <p>{{ cData.published }}</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";
export default {
  created() {
    this.cData = JSON.parse(this.$route.query.data);
  },
  components: {
    Footer,
    Header
  },
  data() {
    return {
      /**
       * 动态背景图
       * 详情页图片路径
       */
      note: {
        backgroundImage: "url(" + JSON.parse(this.$route.query.data).img + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      cData: {}
    };
  },
  methods: {
    /*方法
     * 跳转路径封装
     */
    goGamePage(val) {
      this.$router.push({
        path: "/isotopic",
        query: { gameUrl: JSON.stringify(this.cData.url) }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 3.5rem;
  height: 0.53rem;
  border-radius: 0.08rem;
  background-color: #85be01;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.04rem 0.08rem;
  margin: 0.12rem auto;
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
.back-banner {
  width: 3.47rem;
  height: 1.5rem;
  position: relative;
  margin: 0.2rem auto;
  overflow: hidden;
  border-radius: 0.08rem;
  .back {
    width: 3.47rem;
    height: 1.5rem;
    filter: blur(8px);
  }
  .cont {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    img:nth-of-type(1) {
      width: 0.7rem;
      height: 0.7rem;
      margin: 0.18rem 0 0 0.2rem;
      border-radius: 0.08rem;
    }
    .cont-font {
      width: 2.41rem;
      height: 0.5rem;
      p {
        font-size: 0.16rem;
        color: #fff;
        img {
          width: 0.2rem;
          height: 0.2rem;
        }
        &:nth-of-type(1) {
          margin: 0.2rem 0 0 0.3rem;
        }
        &:nth-of-type(2) {
          margin: 0.1rem 0 0 0.3rem;
          img {
            margin: 0;
          }
        }
        &:nth-of-type(3) {
          margin: 0.1rem 0 0 0.3rem;
          font-size: 0.14rem;
          span {
            color: #f97c33;
          }
        }
        &:nth-of-type(4) {
          margin: 0.1rem 0 0 0.3rem;
          font-size: 0.14rem;
        }
      }
    }
  }
}
.button-start {
  width: 3.47rem;
  height: 0.45rem;
  background: #a2e30a;
  border-radius: 0.06rem;
  margin: 0.1rem auto;
  p {
    height: 0.45rem;
    display: inline-block;
    color: #fff;
    font-size: 0.16rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 0.3rem;
    height: 0.3rem;
  }
}
.similar-head {
  height: 0.22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem auto 0 0;
  img {
    width: 0.25rem;
    height: 0.25rem;
  }
  span {
    margin-left: 0.02rem;
    color: #85be01;
    font-size: 0.16rem;
    font-weight: 500;
  }
}
.details-info {
  width: 3.5rem;
  padding: 0.1rem;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0.06rem;
  margin: 0.2rem auto 0;
  h2 {
    color: #85be01;
    font-size: 0.18rem;
    margin: 0.1rem;
  }
  p {
    font-size: 0.12rem;
    margin: 0.1rem;
    color: #333333;
  }
  h3 {
    color: #868686;
    font-size: 0.14rem;
    margin-top: 0.12rem;
    margin: 0.1rem;
  }
  ol {
    display: flex;
    margin: 0.1rem;
    padding: 0;
    li {
      width: 0.42rem;
      height: 0.26rem;
      border: 1px solid #ccc;
      border-radius: 0.04rem;
      color: #bababa;
      font-size: 0.12rem;
      text-align: center;
      line-height: 0.24rem;
      list-style: none;
      margin-left: 0.1rem;
      &:nth-of-type(1) {
        margin: 0;
      }
    }
  }
}
.game-list-sec {
  width: 3.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0.1rem auto;
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
a {
  text-decoration: none;
}
.img-transi-delay {
  animation: imgAuto 1.2s infinite alternate;
}
@keyframes imgAuto {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
