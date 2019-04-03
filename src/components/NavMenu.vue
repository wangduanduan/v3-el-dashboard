<template>
  <el-row class="tac">
  <el-col :span="24" class="h100">
    <el-menu
      class="no-boarder el-menu-vertical-demo h100"
      router
      unique-opened
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      :default-active="activeTag"
      ref="mySidemenu"
      :collapse="!isNavMenuOpen"
      active-text-color="#ffd04b">

      <el-submenu v-for="item in menu" :index="item.name" :key="item.name" class="no-boarder">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span v-text="item.meta.title"></span>
        </template>
        <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.name">
          <el-menu-item :index="sub.meta.index" v-text="sub.meta.title">
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-col>
</el-row>
</template>

<style scoped>
  .h100{
    height: 100%
  }
  .tac{
    position: fixed;
    top: 0px;
    bottom: 0px;
    z-index: 999;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>

<script>
  import { mapGetters, mapState } from 'vuex'
  import menu from '../config/menu-config'

  export default {
    data () {
      return {
        menu: menu
      }
    },
    computed: {
      ...mapGetters(['activeTag']),
      ...mapState(['isNavMenuOpen'])
    },
    watch: {
      activeTag: function (newValue, oldValue) {
        setTimeout(() => {
          this.$refs.mySidemenu.activeIndex = this.activeTag
        }, 100);
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>