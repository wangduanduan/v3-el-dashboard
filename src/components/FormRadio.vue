<template>
  <div>
    这是：FormRadio
    <input type="text" v-model="inputSome">
  </div>
</template>

<script>
export default {
  name: 'FormRadio',
  data () {
    return {
      inputSome: ''
    }
  }
}
</script>