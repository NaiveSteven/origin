<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu"
             :default-active="$route.path"
             :collapse="collapse"
             background-color="#385E0F"
             text-color="#bfcbd9"
             active-text-color="#CDBE70"
             router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import bus from '../.././bus.js';
  export default {
    name: "SlideMenu",
    data() {
      return {
        collapse: false,
        items: [
          {
            icon: 'el-icon-menu',
            index: '/message',
            title: '消息中心'
          },
          {
            icon: 'el-icon-delete',
            index: '/message/rubbish',
            title: '垃圾箱'
          },
        ]
      }
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    },
    created(){
      // 通过 Event Bus 进行组件间通信，来折叠侧边栏
      bus.$on('collapse', msg => {
        this.collapse = msg;
      })
    },
    methods:{

    }
  }
</script>

<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: .6rem;
    bottom:0;
    overflow-y: scroll;
  }
  .sidebar::-webkit-scrollbar{
    width: 0;
  }
  .sidebar-el-menu:not(.el-menu--collapse){
    width: 2.4rem;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
