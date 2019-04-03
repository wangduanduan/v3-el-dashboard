<template>
  <div>
      <NavMenu />
      <div class="v3-main" :style="{'margin-left': isNavMenuOpen ? '200px': '64px'}">
        <div class="v3-header"> <Header /> </div>
        <div class="v3-tabs"> <TopNav /> </div>
        <el-main class="v3-content-main">
          <keep-alive :include="navTagIndexs">
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import NavMenu from '../components/NavMenu'
import Header from '../components/Header'
import TopNav from '../components/TopNav'

export default {
  name: 'Layout',
  components: {
    NavMenu, Header, TopNav
  },
  computed: {
    ...mapGetters(['navTagIndexs']),
    ...mapState(['isNavMenuOpen'])
  }
}
</script>

<style scoped>
.v3-header {
  height: 40px;
  border-bottom: 1px solid #eee;
  background: #fff
}
.v3-main {
  margin-left: 200px;
}
.v3-content-main {
  background: #fff;
  margin: 10px;
}
.v3-tabs {
  background: #fff
}
</style>