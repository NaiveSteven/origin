<template>
    <div id="home-container">
      <div id="scene"
          data-calibrate-x="false"
          data-calibrate-y="true"
          data-invert-x="false"
          data-invert-y="true"
          data-limit-x="false"
          data-limit-y="10"
          data-scalar-x="2"
          data-scalar-y="8"
          data-friction-x="0.2"
          data-friction-y="0.8"
          data-origin-x="0.0"
          data-origin-y="1.0">
          <div class="layer" data-depth="0.20">
          <div class="words">
            <h2>加入 我们</h2>
            <br>
            <h4 style="line-height: .32rem">我们诚挚的邀请您加入我们</h4>
            <h4 style="line-height: .32rem">为了我们的环境</h4>
            <h4 style="line-height: .32rem">为了我们的孩子</h4>
            <h4 style="line-height: .32rem">...</h4>
          </div>
        </div>
        <div class="layer" data-depth="0.20"><img class="bird-img" src="../../assets/img/bird.png"></div>
        <div class="layer" data-depth="0.40"><img class="dragonfly-img-first" src="../../assets/img/dragonfly.png"></div>
        <div class="layer" data-depth="0.60"><img class="dragonfly-img-second" src="../../assets/img/dragonfly.png"></div>
      </div>
      <div id="invite"
           data-calibrate-x="false"
           data-calibrate-y="true"
           data-invert-x="false"
           data-invert-y="true"
           data-limit-x="false"
           data-limit-y="10"
           data-scalar-x="2"
           data-scalar-y="8"
           data-friction-x="0.2"
           data-friction-y="0.8"
           data-origin-x="0.0"
           data-origin-y="1.0">
        <div class="layer" data-depth="0.40">
          <div class="box-first">
            <h2>目的</h2>
            <br>  
            <h4 style="line-height: .3rem">从小事做起，减少污染，多一点绿色，保护我们共同的家园。</h4>
          </div>
        </div>
        <div class="layer" data-depth="0.60">
          <div class="box-second">
            <h2>性质</h2>
            <br>
            <h4 style="line-height: .3rem">我们的团队是非盈利的，任何志同道合的人都欢迎加入。</h4>
          </div>
        </div>
        <div class="layer" data-depth="0.60">
          <div class="box-third">
            <h2>时间</h2>
            <br>
            <h4 style="line-height: .3rem">我们的团队于2018年3月12日创立，目前正在不断地发展壮大。</h4>
          </div>
        </div>
        <div class="layer" data-depth="0.60">
          <div class="box-forth">
            <h2>口号</h2>
            <br>
            <h4 style="line-height: .3rem;">一花一草皆生命，一枝一叶总关情。因为有我们，所以会更好。</h4>
          </div>
        </div>
<!--         <div class="layer" data-depth="0.80">
          <div class="theme">
            <img class="theme-img" src="../../assets/img/Pink-Butterfly.png" alt="">
          </div>
        </div> -->
      </div>
    </div>
</template>

<script>
  import Parallax from 'parallax-js'
    export default {
        name: "home",
        data () {
          return {
          }
        },
        methods:{
          move(){
            let scene = document.getElementById('scene');
            let parallax = new Parallax(scene, {
              calibrateX: false,
              calibrateY: true,
              invertX: false,
              invertY: true,
              limitX: false,
              limitY: 10,
              scalarX: 2,
              scalarY: 8,
              frictionX: 0.2,
              frictionY: 0.8,
              originX: 0.0,
              originY: 1.0
            });
          },
          invite(){
            let scene = document.getElementById('invite');
            let parallax = new Parallax(scene, {
              calibrateX: false,
              calibrateY: true,
              invertX: false,
              invertY: true,
              limitX: false,
              limitY: 10,
              scalarX: 2,
              scalarY: 8,
              frictionX: 0.2,
              frictionY: 0.8,
              originX: 0.0,
              originY: 1.0
            });
          }
        },
        mounted() {
          this.move()
          this.invite()
        }
    }
</script>

<style lang="stylus" scoped>
#home-container
  background: url('../../assets/img/homebg1.jpg')
  background-size: 100% 100%
  height: 100%
  position: fixed
  width: 100%
  #scene
    img
      width: 2rem
      height: 2rem
    .bird-img
      position: absolute
      top: 1.5rem
      left: 12rem
    .dragonfly-img-first
      position: absolute
      top: 2.5rem
      left: 9rem
    .dragonfly-img-second
      position: absolute
      top: 1rem
      left: 1rem
    .words
      margin: .5rem auto
      width: 4rem
      height: 2rem
      border: solid white 1px
      text-align: center
      h2
        color: white
        font-weight: bold
        font-size: 40px
      h4
        color: white
        font-weight: bold
        font-size: 20px
  #invite
    width: 100%
    height: 25%
    position: absolute 
    bottom: .8rem
    .box-first
      width: 3rem
      height: 2rem
      box-shadow: 1px white
      text-align: center
      float: left
      position: absolute
      left: 0rem
      h2
        color: white
        font-weight: bold
        font-size: 40px
      h4
        color: white
        font-weight: bold
        font-size: 20px
    .box-second
      width: 3rem
      height: 2rem
      box-shadow: 1px white
      text-align: center
      position: absolute
      left: 4rem
      h2
        color: white
        font-weight: bold
        font-size: 40px
      h4
        color: white
        font-weight: bold
        font-size: 20px
    .box-third
      width: 3rem
      height: 2rem
      box-shadow: 1px white
      text-align: center
      float: left
      position: absolute
      left: 8rem
      h2
        color: white
        font-weight: bold
        font-size: 40px
      h4
        color: white
        font-weight: bold
        font-size: 20px
    .box-forth
      width: 3rem
      height: 2rem
      box-shadow: 1px white
      text-align: center
      float: left
      position: absolute
      left: 12rem
      h2
        color: white
        font-weight: bold
        font-size: 40px
      h4
        color: white
        font-weight: bold
        font-size: 20px
/*     .theme
      .theme-img
        width: 2.5rem
        height: 2rem
        position: absolute
        top: 2.2rem
        left: 3.2rem */
</style>
