<template>
  <div class="xf-spinner-double-bounce" :style="{
    width: spinnerSize,
    height: spinnerSize
  }">
    <div class="xf-spinner-double-bounce-bounce1" :style="{ backgroundColor: spinnerColor }"></div>
    <div class="xf-spinner-double-bounce-bounce2" :style="{ backgroundColor: spinnerColor }"></div>
  </div>
</template>

<script>
import common from './common.vue'
export default {
  mixins: [common]
}
</script>

<style lang="scss" scoped>
  $prefix: 'xf-spinner-double-bounce';
  .#{$prefix} {
    position: relative;
  }
  .#{$prefix}-bounce1, .#{$prefix}-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.6;
    top: 0;
    left: 0;

    animation: xf-spinner-double-bounce 2.0s infinite ease-in-out;
  }
  .#{$prefix}-bounce2  {
    animation-delay: -1.0s;
  }

  @keyframes xf-spinner-double-bounce {
    0%, 100% {
      transform: scale(0.0)
    }

    50% {
      transform: scale(1.0)
    }
  }
</style>



