<template>
  <el-row class="tac">
  <el-col :span="24">
    <el-menu
      class="no-boarder"
      router
      unique-opened
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      :default-active="activeTag"
      active-text-color="#ffd04b">

      <el-submenu v-for="item in menu" :index="item.name" :key="item.name" class="no-boarder">
        <template slot="title">
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
  .over-hide{
    /* overflow: hidden; */
  }
  .no-boarder {
    border: none
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  import menu from '../config/menu-config'

  export default {
    data () {
      return {
        menu: menu
      }
    },
    computed: {
      ...mapGetters(['activeTag'])
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