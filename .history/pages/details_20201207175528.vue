<template>
  <div class="container">
    <!-- <Header></Header> -->
    <div class="section">
      <div class="back-banner">
        <div :style="note" class="back"></div>
        <div class="cont">
          <img :src="cData.img" alt="" />
          <div class="cont-font">
            <p>{{ cData.name }}</p>
            <p>
              <img src="../static/images/youxi.png" alt="" /> {{ cData.hot }}
            </p>
            <p><span>★★★★★</span> {{ cData.star }}</p>
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
      <div class="similar-head">
        <img src="../static/images/more.svg" alt="" />
        <span>相关游戏</span>
      </div>
      <div class="game-list-sec standby">
        <dl
          v-for="(item, index) in correlation"
          :key="index"
          @click="getMoveGameList(item)"
        >
          <dt>
            <img :src="item.img" alt="" />
          </dt>
          <dd>
            <p>{{ item.name }}</p>
            <p>
              <img src="../static/images/icon.png" alt="" />
              <span>{{ parseInt(item.hot) }}</span>
            </p>
          </dd>
        </dl>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";
import { getRandomArrayElements } from "../static/api/page";
export default {
  created() {
    if (
      this.$route.query.data != undefined &&
      this.$route.query.correlation != undefined &&
      this.$route.query.conData != undefined
    ) {
      this.cData = JSON.parse(this.$route.query.data);
      this.correlation = JSON.parse(this.$route.query.correlation);
      this.conData = JSON.parse(this.$route.query.conData);
    }
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
      note: {},
      cData: {},
      correlation: [],
      conData: []
    };
  },
  watch: {
    cData: {
      handler(newName, oldName) {
        this.note = {
          backgroundImage: "url(" + this.cData.img + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        };
      }
    },
    deep: true,
    immediate: true
  },
  methods: {
    getMoveGameList(val) {
      this.cData = val;
      document
        .querySelector(".container")
        .scrollIntoView(document.querySelector(".container"));
    },
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
    filter: blur(10px);
  }
  .cont {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    img:nth-of-type(1) {
      width: 0.7rem;
      height: 0.7rem;
      margin: 0.22rem 0 0 0.22rem;
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
          margin: 0.21rem 0 0 0.3rem;
          font-size: 0.17rem;
        }
        &:nth-of-type(2) {
          display: flex;
          align-items: center;
          margin: 0.11rem 0 0 0.3rem;
          img {
            margin: 0 0.1rem 0 0;
          }
        }
        &:nth-of-type(3) {
          margin: 0.11rem 0 0 0.3rem;
          font-size: 0.15rem;
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
  margin: 0.2rem auto 0;
  img {
    width: 0.22rem;
    height: 0.22rem;
  }
  span {
    margin-left: 0.04rem;
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
      min-width: 0.42rem;
      height: 0.26rem;
      border: 1px solid #ccc;
      border-radius: 0.04rem;
      color: #bababa;
      font-size: 0.12rem;
      text-align: center;
      line-height: 0.24rem;
      list-style: none;
      margin-left: 0.1rem;
      padding: 0 0.04rem;
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
  margin: 0.2rem auto;
  dl {
    width: 0.84rem;
    height: 1.2rem;
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
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 0.06rem;
      }
    }
    dd {
      width: 0.75rem;
      margin: 0.08rem auto;
      p:nth-of-type(1) {
        width: 0.75rem;
        height: 0.13rem;
        text-overflow: ellipsis;
        white-space: initial;
        overflow: hidden;
        color: #333;
        font-size: 0.12rem;
      }
      p:nth-of-type(2) {
        width: 0.75rem;
        margin-top: 0.03rem;
        height: 0.19rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 0.13rem;
          height: 0.13rem;
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
  animation: imgAuto 0.8s infinite alternate;
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
