<template>
    <div>
      <el-menu
        :default-active="$route.path"
        router
        class="el-menu-demo"
        mode="horizontal"
        background-color="#228B22"
        text-color="#fff"
        active-text-color="#ffd04b">
        <template v-for="item in menuList">
          <template v-if="item.subList">
            <el-menu-item :index="item.path" :key="item.id">
              {{item.title}}
            </el-menu-item>
            <el-submenu :index="item.path" :key="item.id">
              <template slot="title">
                {{subList.title}}
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.path" :key="item.id">
              {{item.title}}
            </el-menu-item>
            <el-menu-item>
              <img src="../../../assets/img/theme.png" alt="" style="width: .5rem;height: .5rem;">
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "HomeMenu",
        data () {
          return {
            menuList:[
              {
                id:'1',
                path:'/',
                title:'首页'
              },
              {
                id:'2',
                path:'/partner',
                title:'随笔'
              },
              {
                id:'3',
                path:'/forum',
                title:'交流'
              },
              {
                id:'4',
                path:'/message',
                title:'后台信息'
              },
              {
                id:'5',
                path:'/login',
                title:'登陆'
              }
            ]
          }
        },
        methods:{

        },
    }
</script>

<style lang="stylus" scoped>
.el-menu--horizontal
  border-bottom: 0
  opacity: .9
  .is-active
    border-bottom-color: white !important
</style>
