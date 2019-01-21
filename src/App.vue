<template>
  <div id="app">
    <alice-button type="primary">测试</alice-button>
    <alice-slider v-model="slider" :min="0"></alice-slider>
  </div>
</template>

<script>
import aliceIcon from './icon/icon.vue'
import aliceButton from './button'
import aliceSlider from './slider'
export default {
  name: 'App',
  components: { aliceIcon, aliceButton, aliceSlider },
  data() {
    return {
      slider: 50
    }
  }
}
</script>

<style>
</style>
