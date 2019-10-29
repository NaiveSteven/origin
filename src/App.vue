<template>
  <div id="app">
    <home-menu></home-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeMenu from './components/home/components/HomeMenu.vue'
export default {
  name: 'App',
  components:{HomeMenu}
}
</script>

<style lang="stylus">
html
  font-size: 100px
  body
    background-color: azure

</style>
