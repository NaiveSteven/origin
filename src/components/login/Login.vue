<template>
    <div>
    <div id="login">
      <div class="circle">
        <div class="circle-input">
          <input name="username" value="username" class="input-one"/>
          <input name="password" type="password" value="password" class="input-two"/>
        </div>
        <div class="circle-img">
          <input type="submit" value="Login In" class="input-img" />
        </div>
      </div>
    </div>
    <div id="bottom"
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
    <div class="layer" data-depth="0.60"><img class="children-first" src="../../assets/img/login-first.png"></div>
    <div class="layer" data-depth="0.60"><img class="children-login" src="../../assets/img/login-second.png"></div>
    <div class="layer login-first-box" data-depth="0.60"><img class="login-first" src="../../assets/img/login-third.png"></div>
    <div class="layer login-second-box" data-depth="0.60"><img class="login-second" src="../../assets/img/login-forth.png"></div>
  </div>
  </div>
</template>

<script>
  import Parallax from 'parallax-js'
    export default {
        name: "Login",
        methods:{
          move(){
            let bottom = document.getElementById('bottom');
            let parallax = new Parallax(bottom, {
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
        },
        mounted(){
          this.move()
        }
    }
</script>

<style lang="stylus">
#login
  background: url("../../assets/img/grass.jpg")
  background-size: 100% 100%
  height: 100%
  position: fixed
  width: 100%
  .circle
    width: 4.68rem
    height: 4.68rem
    z-index: 2
    background: white
    border-radius: 50%
    text-align: center
    position: absolute
    top: .6rem
    left: 5rem
    box-shadow: 0 0 .1rem black
    transition-property: box-shadow
    transition-duration: 2s
    &:hover
      box-shadow: 0 0 .5rem black
    .circle-img
      position: absolute
      bottom: 0
      left: .66rem
      .input-img
        background: url("../../assets/img/enter.png") no-repeat
        background-size: cover
        width: 3.4rem
        height: .72rem
        border: 0
        display: block
        font-size: .18rem
        color: #FFF
        font-family: Arial, Helvetica, sans-serif
        font-weight: bolder
    .circle-input
      position: absolute
      bottom: 1rem
      .input-one
        height: .37rem
        border: 0
        color: #666
        width: 2.36rem
        margin: .04rem .28rem
        background: url("../../assets/img/user.png") no-repeat
        padding-left: .1rem
        font-size: 16pt
        font-family: Arial, Helvetica, sans-serif
      .input-two
        height: .37rem
        border: 0
        color: #666
        width: 2.36rem
        margin: .04rem .28rem
        background: url("../../assets/img/password.png") no-repeat
        padding-left: .1rem
        font-size: 16pt
        font-family: Arial, Helvetica, sans-serif


.children-first
  width: 3rem
  height: 2rem
  position: absolute
  top: 4.5rem
  left: -.5rem
.children-login
  width: 3rem
  height: 2rem
  position: absolute
  top: 4.3rem
  left: 13rem
  transform: skewX(15deg)
.login-first
  width: 2rem
  height: 2rem
  position: absolute
  left: 5.2rem
  top: 1.5rem
.login-second
  width: 2rem
  height: 2rem
  position: absolute
  top: 1.5rem
  left: 7.7rem
</style>
