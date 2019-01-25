<template>
  <div id="app">
    <alice-button @click.native="open">test</alice-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      popup: false,
      slider: 50,
       multiple: 'option1',
       selected: '1'
    }
  },
  methods: {
    open() {
      this.$confirm({content: '1'},()=> window.alert('1'))
    }
  }
}
</script>

<style>
</style>
