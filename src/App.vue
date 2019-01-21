<template>
  <div id="app">
    <alice-button type="primary">测试</alice-button>
  </div>
</template>

<script>
import aliceIcon from './icon/icon.vue'
import aliceButton from './button'
export default {
  name: 'App',
  components: { aliceIcon, aliceButton }
}
</script>

<style>
</style>
