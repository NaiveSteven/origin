<template>
    <div>
      <slide-menu></slide-menu>
      <div class="slide-menu">
        <el-table
          :data="tableData"
          style="width: 100%"
          max-height="250"
          v-loading="loading">
          <el-table-column
            fixed
            prop="date"
            label="日期"
            width="192">
          </el-table-column>
          <el-table-column
            prop="name"
            label="昵称"
            width="192">
          </el-table-column>
          <el-table-column
            prop="container"
            label="内容"
            width="445">
          </el-table-column>
          <el-table-column width="157">
          </el-table-column>
          <el-table-column width="157">
          </el-table-column>
          <div class="delete-container">
            <el-table-column
              fixed="right"
              label="操作"
              width="115">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="text"
                  size="small">
                  移除
                </el-button>
              </template>
            </el-table-column>
          </div>
        </el-table>
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
        <div class="layer" data-depth="0.40"><img class="butterfly-first" src="../../../assets/img/butterfly-first.png"></div>
        <div class="layer" data-depth="0.90"><img class="butterfly-second" src="../../../assets/img/butterfly-second.png"></div>
        <div class="layer" data-depth="0.40" ><img class="tree-first" src="../../../assets/img/children-third.png"></div>
        <div class="layer" data-depth="0.80"><img class="animal-first" src="../../../assets/img/bottom-fifth.png"></div>
        <div class="layer" data-depth="0.40" ><img class="tree-second" src="../../../assets/img/children-forth.png"></div>
        <div class="layer" data-depth="0.90"><img class="butterfly-third" src="../../../assets/img/butterfly-second.png"></div>
      </div>
    </div>
</template>

<script>
  import HomeMenu from '../../home/components/HomeMenu'
  import SlideMenu from '../components/SlideMenu'
  import Parallax from 'parallax-js'
    export default {
        name: "Tableform",
        components: {SlideMenu},
        methods: {
          deleteRow(index, rows) {
            rows.splice(index, 1);
          },
          stop(){
            setTimeout(()=>{
              this.loading=false;
            },2000)
          },
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
        created(){
          this.stop()
        },
        mounted(){
          this.move()
        },
        data() {
          return {
            loading: true,
            tableData:[
              {
                date:"2019-05-02",
                name:"亦庄亦谐",
                container:"植树活动你来吗？我们小组缺人手，欢迎加入。",
              },
              {
                date:"2019-05-02",
                name:"天真烂漫",
                container:"在吗？这边有个宣传环保的活动你要参加吗？",
              },
              {
                date:"2019-04-19",
                name:"臭小子~",
                container:"网站开了一个线上关于污染的讲坛会，邀请你参加。",
              }
            ]
          }
        }
      }
</script>

<style lang="stylus" scoped>
.slide-menu
  position: absolute
  left: 2.6rem
  top: 1rem
  .delete-container
    background-color: #25a4bb
#bottom
  width: 100%
  height: 55%
  position: absolute
  left: 2.39rem
  bottom: 0
  .tree-first
    width: 6.5rem
    height: 4.11rem
    position: absolute
  .tree-second
    width: 6.52rem
    height: 4.11rem
    position: absolute
    left: 6.44rem
  .butterfly-first
    width: .5rem
    height: .5rem
    position: absolute
    left: 1rem
    top: .5rem
  .butterfly-second
    width: .5rem
    height: .5rem
    position: absolute
    left: 7.5rem
    top: 1rem
  .butterfly-third
    width: .5rem
    height: .5rem
    position: absolute
    left: 3rem
    top: 2rem
  .animal-first
    width: 2rem
    height: 2rem
    position: absolute
    left: 8.2rem
    top: 2rem
</style>
