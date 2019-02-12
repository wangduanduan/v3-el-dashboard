<template>
  <div>
      <div width="180px" class="v3-aside"> <NavMenu /> </div>
      <div class="v3-main">
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
import { mapGetters } from 'vuex'
import NavMenu from '../components/NavMenu'
import Header from '../components/Header'
import TopNav from '../components/TopNav'

export default {
  name: 'Layout',
  components: {
    NavMenu, Header, TopNav
  },
  computed: {
    ...mapGetters(['navTagIndexs'])
  }
}
</script>

<style scoped>
.v3-header {
  height: 48px;
  border-bottom: 1px solid #eee;
  background: #fff
}
.v3-aside {
  width: 180px;
  position: fixed;
  bottom: 0px;
  top: 0px;
  background: rgb(84, 92, 100);
  overflow: hidden;
}
.v3-main {
  margin-left: 180px;
}
.v3-content-main {
  background: #fff;
  margin: 10px;
}
.v3-tabs {
  background: #fff
}
</style>