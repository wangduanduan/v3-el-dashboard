<template>
  <div>
    这是：FormCheckbox
    <input type="text" v-model="inputSome">
  </div>
</template>

<script>
export default {
  name: 'FormCheckbox',
  data () {
    return {
      inputSome: ''
    }
  }
}
</script>