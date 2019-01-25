<template>
  <transition name="alice-fade">
    <div
      v-show="visible"
      class="alice-mask"
      :class="className"
      :style="style"
      @touchmove.prevent.stop
      @click="$emit('click', $event)"
    />
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    zIndex: Number,
    visible: Boolean,
    className: String,
    customStyle: Object
  },

  computed: {
    style() {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      };
    }
  }
};
</script>
<style lang="scss">
@import './main.scss';
</style>

