<template>
  <label class="alice-switch">
    <input  class="alice-switch-input" type="checkbox" :disabled="disabled" @change="$emit('change', currentValue)" v-model="currentValue">
    <span class="alice-switch-core"></span>
    <div class="alice-switch-label"> <slot></slot></div>
  </label>
</template>
<script>
export default {
  props: {
    value: Boolean,
    disabled : {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './main.scss';
</style>



