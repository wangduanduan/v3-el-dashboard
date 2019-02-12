<template>
  <el-row>
    <el-col :span="24" class="header-wrap">
    
    </el-col>
  </el-row>
</template>

<script>
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
      }
    }
  }
</script>


<style scoped>
  .head-wrap {
    height: 48px;
    border-bottom: 1px solid #eee;
  }
</style>