<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <NavMenu />
        </el-aside>
        <el-main>
          <TopNav />
          <keep-alive :include="navTags">
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import NavMenu from './components/NavMenu'
import Header from './components/Header'
import TopNav from './components/TopNav'

export default {
  name: 'app',
  components: {
    NavMenu, Header, TopNav
  },
  computed: {
    ...mapState(['navTags'])
  }
}
</script>

<style>
.header {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
}
</style>