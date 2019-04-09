<template>
  <el-row>
    <el-col :span="2" class="header-wrap">
      <el-button class="no-b" :icon="iconName" @click="toggleMenuOpen"></el-button>
    </el-col>
    <el-col :span="2" :offset="20" class="header-wrap text-r">
      <el-dropdown>
        <el-button class="no-b">
          <i class="fa fa-user-circle" aria-hidden="true"></i> <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <i class="fa fa-address-card-o"></i>
            查看个人信息</el-dropdown-item>
          <el-dropdown-item>
            <i class="fa fa-power-off"></i>
            登出</el-dropdown-item>
          <el-dropdown-item>
            <i class="fa fa-wrench"></i>
            修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      toggleMenuOpen() {
        this.$store.commit('toggleMenuOpen')
      }
    },
    computed: {
      ...mapState(['isNavMenuOpen']),
      iconName() {
        return this.isNavMenuOpen ? 'fa fa-outdent' : 'fa fa-indent'
      }
    }
  }
</script>


<style scoped>
  .no-b{
    border: none!important
  }
  .text-r {
    text-align: right
  }

  .head-wrap {
    height: 40px;
    border-bottom: 1px solid #eee;
  }
</style>