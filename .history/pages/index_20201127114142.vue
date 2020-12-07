<template>
  <div class="container">
    <div class="header">
      <img
        @click="goHome('/')"
        src="../static/images/home.png"
        :class="this.$route.pash !== '/' ? 'hide' : ''"
        alt=""
      />
      <img @click="goHome('/')" src="../static/images/logo.svg" alt="" />
      <img src="../static/images/china.png" alt="" />
    </div>
    <div class="section">
      <div class="nav-title-sec">
        <a href=""
          ><img src="../static/images/new.svg" alt="" /><span
            >New Games</span
          ></a
        >
        <a href=""
          ><img src="../static/images/feature.svg" alt="" /><span
            >FEATUREO</span
          ></a
        >
        <a href=""
          ><img src="../static/images/hot.svg" alt="" /><span
            >Hot Games</span
          ></a
        >
      </div>
      <h2>
        <span class="fy">New Games</span
        ><span @click="goHome('/page')">more</span>
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
      <h2><span>FEATUREO</span><span @click="goHome('/page')">more</span></h2>
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
      <h2><span>Hot Games</span><span @click="goHome('/page')">more</span></h2>
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
      </div>
      <div class="footer">
        <p>Copyright © Dob5.com 2020 All Rights Reserved</p>
        <p>Copyright © 2018.All rights Reserved.</p>
        <p>Contact us at : service@s-onlinegames.com</p>
        <p>
          Notice:the content is provided by the content developer.If there are
          any objections,please give us the original proof and we will remove it
          after verification.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import pageGameList from "../static/game/game";
import "../static/css/header.scss";

export default {
  created() {
    this.pageGameList = pageGameList;
    console.log();
    //   {
    //   "name": "EMOJI GAME",
    //   "star": 5,
    //   "hot": "962K+ player",
    //   "img": "https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg",
    //   "tag": [
    //     "Html5",
    //     "cute",
    //     "3d"
    //   ],
    //   "dimensions": "800x600",
    //   "published": "2020-11-16 11:20:13",
    //   "categories": "PUZZLE",
    //   "description": "A new imagination game in which you need to connect pairs of emotions by associations. Think and find the idea of each puzzle. Just tap one by one on the elements from different columns to connect them with a line. Or drag to draw a line and connect elements from different columns. If you correctly connect all the elements, you pass the level. Harder than you think!",
    //   "url": "https://html5.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50/"
    // },
  },
  data() {
    return {
      pageGameList: []
    };
  },
  methods: {
    goHome(val) {
      this.$router.push(val);
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.container {
  width: 3.47rem;
  margin: 0.12rem auto;
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
}
.game-list-sec {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0.04rem auto 0.15rem;
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
  a {
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
  width: 3.9rem;
  height: 2.6rem;
  background: #fff;
  margin-top: 0.3rem;
  overflow: hidden;
  .game-overflow {
    width: 10rem;
    height: 2.6rem;
    transform: translatex(200);
    animation: game-s linear 10s infinite alternate;
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

.footer {
  width: 3.75rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #111111;
  p {
    font-size: 0.12rem;
    text-align: center;
    margin: 0.04rem 0;
    color: #fff;
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
