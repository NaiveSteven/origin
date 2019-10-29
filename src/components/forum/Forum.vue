<template>
    <div class="forum-container">
    <div class="middle-container">
      <div class="middle-container-now">
        <a>当前目录：交流区</a>
        <div class="demo-input-suffix">
          <el-input
            placeholder="请输入内容"
            v-model="inputData"
            size="mini">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
      <div class="middle-container-top">
        <div class="middle-container-top-leftdiv">
          <img src="../../assets/img/theme.png" alt="">
          <div class="middle-container-top-leftdiv-content">
            <a>精英社团</a>
            <p>成员: 8000 话题: 396</p>
            <div class="middle-container-top-leftdiv-button">
              <el-row>
                <el-button type="danger" size="mini">加入社区</el-button>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <div class="middle-container-border">
      </div>
      <div class="middle-container-carousel">
        <div class="block">
          <el-carousel trigger="click" height="2rem">
            <el-carousel-item v-for="item in carouselPicture" :key="item.id">
              <img :src="item.path" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="border-card">
          <el-tabs v-model="activeName">
            <el-tab-pane label="公告" name="first">
              <div class="border-card-container">
                <p>感谢大家一直以来的陪伴，蔚士与你同在</p>
                <p>请勿相信非官方私信，防止上当受骗</p>
                <p>论坛于今日凌晨1-3点进入维护，开放敬请期待！</p>
                <p>请大家文明发言，踊跃参与团队活动</p>
                <p>三月植树季，蔚士喊你来种树啦！！</p>
                <p>蔚士论坛今日已开通，请大家踊跃发帖</p>
              </div>
              <div class="border-card-date">
                <p>2018-08-20</p>
                <p>2018-06-08</p>
                <p>2018-05-05</p>
                <p>2018-04-08</p>
                <p>2018-03-27</p>
                <p>2018-03-13</p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="活动" name="second">
              <div class="border-card-container">
                <p>绿水小区清除“牛皮藓”活动取得圆满成功！</p>
                <p>各学校学生会代表联盟，开展保护环境校园赛</p>
                <p>理工大学大一新生为蔚士论坛助力，保护学校新家园</p>
                <p>蔚士论坛线上视频征集 好礼不停！！！</p>
                <p>蔚士线下交流会于3月14日万达广场举行</p>
                <p>阳光小学一年级植树节开种了</p>
              </div>
              <div class="border-card-date">
                <p>2019-04-08</p>
                <p>2019-04-06</p>
                <p>2019-03-25</p>
                <p>2019-03-18</p>
                <p>2019-03-14</p>
                <p>2019-03-12</p>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="middle-container-partner">
        <div class="words">
          <p>团队成员</p>
          <a>更多>></a>
        </div>
        <div class="middle-container-partner-img">
          <img src="../../assets/img/people-first.jpg" alt="">
          <img src="../../assets/img/people-second.jpg" alt="">
          <img src="../../assets/img/people-third.jpg" alt="">
          <img src="../../assets/img/people-forth.jpg" alt="">
          <img src="../../assets/img/people-fifth.jpg" alt="">
          <img src="../../assets/img/people-sixth.jpg" alt="">
          <img src="../../assets/img/people-seventh.jpg" alt="">
        </div>
      </div>
      <div class="middle-container-theme">
        <div class="middle-container-theme-box">
          <p>全部帖子</p>
        </div>
        <div class="middle-container-theme-button">
          <el-row>
            <el-button type="primary" size="small"> + 发表新话题</el-button>
          </el-row>
        </div>
      </div>
      <div class="middle-container-comment">
        <template v-for="item in content">
          <div class="middle-container-comment-box">
            <div class="middle-container-comment-content">
              <img src="../../assets/img/book.png" alt="">
              <span>[玩家交流]</span>
              <a>{{item.title}}</a>
              <p>{{item.content}}</p>
            </div>
            <div class="middle-container-comment-img">
              <img :src="item.contentImgFirst" alt="">
              <img :src="item.contentImgSecond" alt="">
            </div>
            <div class="middle-container-comment-bottom">
              <div class="hot">
                <p>热度({{item.hot}})</p>
              </div>
              <div class="eye">
                <img src="../../assets/img/eye.png" alt="">
                <p>{{item.clickNumber}}</p>
              </div>
              <div class="comment">
                <img src="../../assets/img/comment.png" alt="">
                <p>{{item.commentNumber}}</p>
              </div>
            </div>
            <div class="middle-container-comment-admin">
              <div class="admin">
                <img src="../../assets/img/people.png" alt="">
                <p>{{item.adminName}}</p>
              </div>
              <div class="commenter">
                <img src="../../assets/img/comment.png" alt="">
                <p>{{item.commenterName}}</p>
              </div>
              <p class="words">{{item.time}}</p>
            </div>
          </div>
        </template>
        <div class="middle-container-pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
      <div class="mySwiper">
        <template>
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide><img src="../../assets/img/forum-first.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/img/forum-second.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/img/forum-third.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/img/forum-forth.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/img/forum-fifth.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/img/forum-sixth.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/img/forum-seventh.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/img/forum-eight.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../assets/img/forum-ninth.jpg" alt=""></swiper-slide>
            <!-- Optional controls -->
          </swiper>
        </template>
      </div>
    </div>
    <div class="fixbox" v-drag>
      <img src="../../assets/img/animal.png" alt="">
      <div class="send-topics">
        <p class="words">发表</p>
        <p>话题</p>
      </div>
      <div class="more-news">
        <p>更多</p>
        <p>新闻</p>
      </div>
      <div class="topics">
        <p>动态</p>
        <p>主题</p>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Forum",
        data(){
          return{
            swiperOption: {
              loop: true,
              loopAdditionalSlides: 8,
              direction: 'vertical',
              width: 200,
              height: 160,
              speed:300,
              autoplay : {
                delay:3000,
              },
            },
            inputData:'',
            carouselPicture:[
              {
                id:'1',
                path:require('../../assets/img/swipe-first.jpg'),
                title:'拥抱大树'
              },
              {
                id:'2',
                path:require('../../assets/img/swipe-second.jpg'),
                title:'拥抱大树'
              },
              {
                id:'3',
                path:require('../../assets/img/swipe-third.jpg'),
                title:'拥抱大树'
              },
              {
                id:'4',
                path:require('../../assets/img/swipe-forth.jpg'),
                title:'拥抱大树'
              },
            ],
            activeName:'first',
            content:[
              {
                title:'我的孩子长大了',
                content:'大宝和二宝今日主动捡拾垃圾，让我甚是欣慰',
                contentImgFirst:require('../../assets/img/comment-first.jpeg'),
                contentImgSecond:require('../../assets/img/comment-second.jpg'),
                hot:'56',
                clickNumber:'564',
                commentNumber:'12',
                adminName:'家有二宝',
                commenterName:'小蝴蝶~',
                time:'30分钟前'
              },
              {
                title:'今年的春天真美',
                content:'清晨久违的阳光折射在波光粼粼的湖面，鸟儿低飞',
                contentImgFirst:require('../../assets/img/comment-third.jpg'),
                contentImgSecond:require('../../assets/img/comment-forth.jpeg'),
                hot:'62',
                clickNumber:'5415',
                commentNumber:'56',
                adminName:'天真烂漫',
                commenterName:'寒冬流星',
                time:'35分钟前'
              },
              {
                title:'你们的小区脏吗？？',
                content:'我是友爱小区的住户，小区的环境在各住户的共同配合下很整洁',
                contentImgFirst:require('../../assets/img/comment-fifth.jpg'),
                contentImgSecond:require('../../assets/img/comment-sixth.jpeg'),
                hot:'59',
                clickNumber:'152',
                commentNumber:'6',
                adminName:'SunshineX',
                commenterName:'(OwO)啊',
                time:'38分钟前'
              },
              {
                title:'什么时候还有线下聚会',
                content:'上次举办的交流会，个人感觉很有意义，不知道什么时候下次什么...',
                contentImgFirst:require('../../assets/img/comment-seventh.jpg'),
                contentImgSecond:require('../../assets/img/comment-eight.jpg'),
                hot:'569',
                clickNumber:'548',
                commentNumber:'46',
                adminName:'北巷听雨！！',
                commenterName:'大家好我叫豆娃',
                time:'39分钟前'
              },
              {
                title:'邀请大家踊跃加入',
                content:'我今天发现一个小区门口很脏，全是垃圾，有没有更我一起去干活的',
                contentImgFirst:require('../../assets/img/comment-ninth.jpg'),
                contentImgSecond:require('../../assets/img/comment-ten.jpg'),
                hot:'985',
                clickNumber:'564',
                commentNumber:'10',
                adminName:'岁月~星辰',
                commenterName:'"大大"',
                time:'41分钟前'
              },
              {
                title:'蔚士小团队有没有吉祥物啊',
                content:'不知道小团队有没有吉祥物，我今天突发奇想，画了一个,大家看看...',
                contentImgFirst:require('../../assets/img/comment-11.jpg'),
                contentImgSecond:require('../../assets/img/comment-12.jpg'),
                hot:'566',
                clickNumber:'784',
                commentNumber:'23',
                adminName:'冥界中古战士',
                commenterName:'希',
                time:'45分钟前'
              },

            ],
          }
        }
    }
</script>

<style lang="stylus" scoped>
.middle-container
  overflow: hidden
  position: relative
  background-color: #ffffff
  margin: .6rem auto
  width: 9rem
  height: 18.6rem
  .middle-container-now
    width: 100%
    height: .3rem
    position: absolute
    top: .03rem
    a
      font-size: .18rem
      color: grey
      margin-left: .1rem
    .demo-input-suffix
      margin-right: .1rem
      margin-top: .01rem
  .middle-container-top
    position: absolute
    top: .4rem
    .middle-container-top-leftdiv
      width: 2.5rem
      height: .8rem
      img
        width: .8rem
        height: .8rem
      .middle-container-top-leftdiv-content
        position: relative
        float: right
        line-height: .43rem
        margin-right: .3rem
        a
          color: black
          font-size: .15rem
        p
          color: grey
          font-size: .13rem
        .middle-container-top-leftdiv-button
          position: absolute
          right: -.3rem
          top: 0
  .middle-container-border
    width: 100%
    border-bottom: dashed grey
    position: absolute
    top: 1.3rem
  .middle-container-carousel
    width: 100%
    height: 2rem
    position: absolute
    top: 1.5rem
    .block
      width: 45%
      margin-left: .1rem
      img
        width: 100%
    .border-card
      width: 50%
      float: right
      position: absolute
      top: -.1rem
      right: .1rem
      .border-card-container
        p
          color: black
          line-height: .25rem
          font-size: .15rem
      .border-card-date
        margin-top: -1.5rem
        float: right
        p
          line-height: .25rem
          color: grey
          font-size: .15rem
  .middle-container-partner
    width: 100%
    height: 1.4rem
    position: absolute
    top: 3.6rem
    .words
      width: 100%
      height: .3rem
      background: #cacaca
      p
        color: white
        font-size: .15rem
        margin-left: .1rem
        line-height: .3rem
      a
        float: right
        margin-top: -.2rem
        color: white
        font-size: .15rem
        margin-right: .1rem
        line-height: .1rem
    .middle-container-partner-img
      dispaly: flex
      flex-direction: wrap
      justify-content: space-between
      margin-left: .15rem
      margin-top: .1rem
      img
        width: 1.05rem
        height: 1.05rem
        margin-right: .18rem
  .middle-container-theme
    position: absolute
    top: 5.2rem
    width: 100%
    height: .5rem
    background-color: #cacaca
    .middle-container-theme-box
      width: 1rem
      height: .35rem
      background: skyblue
      float: left
      margin-top: .075rem
      margin-left: .1rem
      text-align: center
      p
        color: white
        font-size: .16rem
        line-height: .35rem
    .middle-container-theme-button
      float: right
      margin-right: .1rem
      margin-top: .09rem
  .middle-container-comment
    width: 70%
    position: absolute
    top: 5.7rem
    .middle-container-comment-box
      width: 100%
      height: 2.05rem
      position: relative
      .middle-container-comment-content
        width: 4rem
        height: .5rem
        position: absolute
        top: .15rem
        left: .1rem
        img
          width: .15rem
          height: .15rem
        span
          color: skyblue
          font-size: .12rem
          margin-left: .08rem
        a
          margin-left: .08rem
        p
          color: grey
          margin-left: .25rem
          margin-top: .08rem
      .middle-container-comment-img
        width: 2rem
        height: 1.5rem
        position: absolute
        top: .7rem
        left: .35rem
        display: flex
        flex-direction: wrap
        justify-content: space-between
        img
          width: 1rem
          height: 1rem
          float: left
          margin-right: .1rem
      .middle-container-comment-bottom
        position: absolute
        top: 1.8rem
        left: .1rem
        width: 4rem
        height: .2rem
        .hot
          float: left
          margin-left: 0
          p
            color: grey
        .eye
          margin-left: .3rem
          float: left
          img
            width: .2rem
            height: .2rem
            float: left
          p
            color: grey
            float: left
            margin-left: .05rem
        .comment
          margin-left: .5rem
          float: left
          img
            width: .2rem
            height: .2rem
            float: left
          p
            color: grey
            float: left
            margin-left: .05rem
      .middle-container-comment-admin
        position: absolute
        right: .1rem
        top: .15rem
        width: 1.9rem
        height: .5rem
        .admin
          margin-top: .03rem
          margin-left: .1rem
          img
            width: .2rem
            height: .2rem
            float: left
            margin-top: -.05rem
          p
            color: darkseagreen
            float: left
            margin-left: .1rem
            margin-top: -.04rem
        .commenter
          margin-left: .1rem
          margin-top: .2rem
          img
            width: .2rem
            height: .2rem
            margin-top: -.05rem
            float: left
          p
            float: left
            margin-left: .05rem
            margin-top: -.03rem
        .words
          color: grey
          float: right
          margin-top: -.01rem

    .middle-container-pagination
      margin-top: .2rem
      float: right
  .mySwiper
    position: absolute
    top: 5.8rem
    right: .1rem
    over-flow: hidden
    .swiper-container
      overflow: hidden
    img
      width: 2.5rem
      height: 1.5rem
.fixbox
  position: absolute
  top: 5rem
  right: 2.5rem
  background: azure
  width: .5rem
  height: 2.1rem
  img
    width: .5rem
    height: .5rem
    margin-bottom: -.08rem
  .send-topics
    margin-top: 0
    width: .5rem
    height: .5rem
    background: #00CD66
    border-bottom: .02rem solid azure
    text-align: center
    p
      font-size: .12rem
      color: white
      line-height: .25rem
  .more-news
    width: .5rem
    height: .5rem
    background: white
    border-bottom: .02rem solid azure
    text-align: center
    p
      font-size: .12rem
      color: green
      line-height: .25rem
  .topics
    width: .5rem
    height: .5rem
    background: white
    border-bottom: .02rem solid azure
    text-align: center
    p
      font-size: .12rem
      color: green
      line-height: .25rem
</style>
<style lang="stylus">
.demo-input-suffix
  width: 30%
  height: 100%
  position: absolute
  right: 0
  top: 0
</style>
