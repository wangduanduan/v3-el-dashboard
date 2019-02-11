<template>
  <div>
    这是：BasicContainer
    <input type="text" v-model="inputSome">

    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'BasicContainer',
    data() {
      return {
        inputSome: '',
        dialogVisible: false
      }
    }
  }
</script>