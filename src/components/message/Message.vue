<template>
  <div>
    <slide-menu></slide-menu>
    <tableform></tableform>
  </div>
</template>

<script>
  import HomeMenu from '../home/components/HomeMenu.vue'
  import SlideMenu from './components/SlideMenu.vue'
  import Tableform from './form/Tableform.vue'
    export default {
        name: "Message",
        components: {SlideMenu,Tableform}
    }
</script>

<style lang="stylus" scoped>
.message-table
  position: absolute
  right: 0
  top: 1rem
  img
    width: 3rem
    height: 3rem


</style>
