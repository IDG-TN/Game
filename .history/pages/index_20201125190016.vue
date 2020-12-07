<template>
  <div class="container">
    <div class="header">
      <img src="../static/images/home.png" alt="">
      <img src="../static/images/logo.svg" alt="">
      <img src="../static/images/china.png" alt="">
    </div>
    <div class="section">
      <div class="nav-title-sec">
        <a href=""><img src="../static/images/new.svg" alt=""><span>最新游戏</span></a>
        <a href=""><img src="../static/images/feature.svg" alt=""><span>特色游戏</span></a>
        <a href=""><img src="../static/images/hot.svg" alt=""><span>热门游戏</span></a>
      </div>
      <div class="game-list-sec">
        <a href="">
          <dl>
            <dt>
              <img src="https://img.gamedistribution.com/1ac03aed33eb4f55a885dfaab4e97a50-512x512.jpeg" alt="">
            </dt>
            <dd>
              <p>EMOJI GAME</p>
              <p>
                <img src="../static/images/icon.png" alt="">
                <span>962K+ player</span>
              </p>
            </dd>
          </dl>
        </a>
      </div>
    </div>
    <div class="footer">

    </div>
    </div>
  </div>
</template>

<script>
import pageGameList from '../static/game/game'
export default {
  created(){
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
  }
}
</script>

<style lang="scss">
body{
  background: #eee;
}
.container{
  width: 3.47rem;
  margin: 0.12rem auto;
  .header{
    width: 100%;
    height: 0.53rem;
    border-radius: 0.08rem;
    background-color: #85be01;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.08rem;
    img:nth-of-type(1){
      width: 0.32rem;
      height: 0.32rem;
    }
    img:nth-of-type(2){
      width: 1.7rem;
      height: 0.38rem;
    }
    img:nth-of-type(3){
      width: 0.32rem;
      height: 0.21rem;
      border-radius: 0.04rem;
    }
  }
  .nav-title-sec{
    width: 3.5rem;
    height: 0.45rem;
    background: #ffffff;
    border-radius: 0.08rem;
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
      text-decoration: none;
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
  .game-list-sec{
    display: flex;
    flex-wrap: wrap;
    dl{
      width: 1.05rem;
      height: 1.49rem;
      background: #fff;
      border-radius: 0.06rem;
      display: flex;
      flex-direction: column;
      dt{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -;
        img{
          width: 0.99rem;
          height: 0.99rem;
        }
      }
      dd{
        p:nth-of-type(1){
          height: 0.16rem;
          text-overflow: ellipsis;
          white-space: initial;
          overflow: hidden;
        }
        p:nth-of-type(2){
          height: 0.19rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
}

</style>
