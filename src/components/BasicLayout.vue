<template>
  <div>
    这是：BasicLayout
    <input type="text" v-model="inputSome">
  </div>
</template>

<script>
export default {
  name: 'BasicLayout',
  data () {
    return {
      inputSome: ''
    }
  }
}
</script>
