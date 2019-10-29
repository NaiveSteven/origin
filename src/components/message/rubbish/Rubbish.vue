<template>
  <div>
    <slide-menu></slide-menu>
      <div class="container"
           v-loading="loading">
        <el-tabs v-model="message" aria-valuetext="宋体">
          <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
            <el-table :data="unread" :show-header="false" style="width: 100%">
              <el-table-column>
                <template slot-scope="scope">
                  <span class="message-title">{{scope.row.title}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="date" width="180"></el-table-column>
              <el-table-column width="120">
                <template slot-scope="scope">
                  <el-button type="danger" size="small" @click="handleRead(scope.$index)">标为已读</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="handle-row">
              <el-button type="primary" @click="handleAllRead">全部标为已读</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="`已读消息(${read.length})`" name="second">
            <template v-if="message === 'second'">
              <el-table :data="read" :show-header="false" style="width: 100%">
                <el-table-column>
                  <template slot-scope="scope">
                    <span class="message-title">{{scope.row.title}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="date" width="150"></el-table-column>
                <el-table-column width="120">
                  <template slot-scope="scope">
                    <el-button type="danger" @click="handleDel(scope.$index)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="handle-row">
                <el-button type="danger" @click="handleAllDel">删除全部</el-button>
              </div>
            </template>
          </el-tab-pane>
          <el-tab-pane :label="`回收站(${recycle.length})`" name="third">
            <template v-if="message === 'third'">
              <el-table :data="recycle" :show-header="false" style="width: 100%">
                <el-table-column>
                  <template slot-scope="scope">
                    <span class="message-title">{{scope.row.title}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="date" width="150"></el-table-column>
                <el-table-column width="120">
                  <template slot-scope="scope">
                    <el-button type="danger" @click="handleRestore(scope.$index)">还原</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="handle-row">
                <el-button type="danger" @click="clearAll">清空回收站</el-button>
              </div>
            </template>
          </el-tab-pane>
        </el-tabs>
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
        <div class="layer" data-depth="0.80"><img class="children-first" src="../../../assets/img/bottom-first.png"></div>
        <div class="layer" data-depth="0.40"><img class="children-second" src="../../../assets/img/bottom-green.png"></div>
        <div class="layer" data-depth="0.80"><img class="children-forth" src="../../../assets/img/bottom-forth.png"></div>
        <div class="layer" data-depth="0.40"><img class="children-fifth" src="../../../assets/img/bottom-color.png"></div>
      </div>
  </div>
</template>

<script>
  import SlideMenu from '../components/SlideMenu'
  import Parallax from 'parallax-js'
  export default {
    name: 'Rubbish',
    components: {SlideMenu},
    data() {
      return {
        loading: true,
        message: 'first',
        showHeader: false,
        unread: [{
          date: '2019-04-19 07:00',
          title: '【系统通知】该网站将于今晚下午2点到5点举办线上关于环境污染的知识讲坛',
        },{
          date: '2019-04-18 21:00',
          title: '【系统通知】线下植树，清理垃圾活动邀请你的加入，详情请点击',
        }],
        read: [{
          date: '2019-04-19 07:00',
          title: '【系统通知】该网站将于今晚下午2点到5点举办线上关于环境污染的知识讲坛'
        }],
        recycle: [{
          date: '2019-04-19 07:00',
          title: '【系统通知】该网站将于今晚下午2点到5点举办线上关于环境污染的知识讲坛'
        }]
      }
    },
    created(){
      this.stop()
    },
    mounted(){
      this.move()
    },
    methods: {
      stop(){
        setTimeout(()=>{
          this.loading=false;
        },2000)
      },
      handleRead(index) {
        const item = this.unread.splice(index, 1);
        console.log(item);
        this.read = item.concat(this.read);
      },
      handleDel(index) {
        this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const item = this.read.splice(index, 1);
          this.recycle = item.concat(this.recycle);
          this.$message.success('删除成功');
        }).catch(() => {
          this.$message({type: 'info',message: '已取消删除'});
        });

      },
      handleRestore(index) {
        const item = this.recycle.splice(index, 1);
        this.read = item.concat(this.read);
      },
      handleAllRead(){
        this.read=this.read.concat(this.unread);
        this.unread=[];
        this.$message.success('标记成功');
      },
      handleAllDel(){
        this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.recycle=this.recycle.concat(this.read);
          this.read=[];
          this.$message.success('删除成功');
        }).catch(() => {
          this.$message({type: 'info',message: '已取消删除'});
        });
      },
      clearAll(){
        this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.recycle=[];
          this.$message.success('清除成功');
        }).catch(() => {
          this.$message({type: 'info',message: '已取消删除'});
        });
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
    computed: {
      unreadNum(){
        return this.unread.length;
      }
    },
  }

</script>

<style scoped>
  .message-title{
    cursor: pointer;
  }
  .handle-row{
    margin-top: 30px;
  }
  .container{
    width: 83%;
    position: absolute;
    top: 1rem;
    left: 2.5rem;
  }
  .children-first{
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 4.8rem;
    left: 4.9rem;
  }
  .children-second{
  width: 6.5rem;
  height: 4.2rem;
  position: absolute;
  top: 2.72rem;
  left: 2.38rem;
  }
  .children-third{
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 5.2rem;
    left: 11rem;
  }
    .children-forth{
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 4.9rem;
    left: 11rem;
  }
    .children-fifth{
    width: 6.51rem;
    height: 4.2rem;
    position: absolute;
    top: 2.72rem;
    left: 8.85rem;
  }
</style>
