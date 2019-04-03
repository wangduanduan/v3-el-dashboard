<template>
  <el-row>
    <el-col :span="24" class="header-wrap">
      <el-button :icon="iconName" @click="toggleMenuOpen"></el-button>
    </el-col>
  </el-row>
</template>

<script>
  import { mapState } from 'vuex'
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
      toggleMenuOpen () {
        this.$store.commit('toggleMenuOpen')
      }
    },
    computed: {
      ...mapState(['isNavMenuOpen']),
      iconName () {
        return this.isNavMenuOpen ? 'fa fa-outdent' : 'fa fa-indent'
      }
    }
  }
</script>


<style scoped>
  .head-wrap {
    height: 40px;
    border-bottom: 1px solid #eee;
  }
</style>