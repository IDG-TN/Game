<template>
  <div class="container">
    <div class="header">
      <img @click="goHome('/')" src="../static/images/home.png" alt="">
      <img @click="goHome('/')"src="../static/images/logo.svg" alt="">
      <img src="../static/images/china.png" alt="">
    </div>
    <div class="section">
      <div class="nav-title-sec">
       <a href=""><img src="../static/images/new.svg" alt=""><span>最新游戏</span></a> 
        <a href=""><img src="../static/images/feature.svg" alt=""><span>特色游戏</span></a>
        <a href=""><img src="../static/images/hot.svg" alt=""><span>热门游戏</span></a>
      </div>
      <h2>最新游戏</h2>
      <div class="game-list-sec">
        <nuxt-link v-for="(item,index) in pageGameList" :key="index" :to="{path:'/details',query:{data:item}}">
          <dl>
            <dt>
              <img :src="item.img" alt="">
            </dt>
            <dd>
              <p>{{item.name}}</p>
              <p>
                <img src="../static/images/icon.png" alt="">
                <span>{{item.hot}}</span>
              </p>
            </dd>
          </dl>
          </nuxt-link>
      </div>
      <h2>特色游戏</h2>
      <div class="game-crosswise">
        <div class="game-overflow">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
          <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Copyright © Dob5.com 2020 All Rights Reserved</p>
      <p>Copyright © 2018.All rights Reserved.</p> 
      <p>Contact us at : service@s-onlinegames.com</p>
      <p>Notice:the content is provided by the content developer.If there are any objections,please give us the original proof and we will remove it after verification.</p>
    </div>
    </div>
  </div>
</template>

<script>
import pageGameList from '../static/game/game'
import '../static/css/header.scss'

export default {
  created(){
    this.pageGameList = pageGameList
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
  data(){
    return{
      pageGameList:[]
    }
  },
  methods:{
    goHome(val){
      this.$router.push(val)
    },
    ddd(){
      console.log('22')
    }
  }
}
</script>

<style lang="scss">
  .nav-title-sec{
    width: 3.5rem;
    height: 0.45rem;
    background: #ffffff;
    border-radius: 0.06rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.1rem;
    border: 1px solid #ddd;
    a{
      display: inline-block;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 0.73rem;
      height: 0.28rem;
      margin-left: 0.2rem;
      img{
        width:0.2rem;
        height: 0.2rem;
      }
      span{
        font-size: 0.12rem;
        color: #666;
      }
      &:nth-of-type(1){
        margin: 0;
      }
    }
  }
  .game-crosswise{
    width: 3.75rem;
    height: 2.6rem;
    background: #fff;
    margin-left:-0.14rem;
    overflow: hidden;
    .game-overflow{
      width: 10rem;
      height: 2.6rem;
      transform: translatex(200);
      animation: game-s linear 10s infinite alternate;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      overflow: hidden;
      img{
        margin: 0 0.04rem;
        width: 0.76rem;
        height: 0.76rem;
        border: 1px solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  @keyframes game-s{
    form{
      transform:translateX(0)
    }
    100%{
      transform:translateX(-300px)
    }
  }
</style>
