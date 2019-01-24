<template>
  <span><component :is="spinner" :size="size" :color="color"></component></span>
</template>

<script>
/**
 * @param {(string|number)} [type=snake] - 显示类型，传入类型id
 * @param {number} size - 尺寸
 * @param {string} color - 颜色
 *
 * @example
 * <xf-spinner type="snake"></xf-spinner>
 *
 * <!-- double-bounce -->
 * <xf-spinner :type="1"></xf-spinner>
 *
 * <!-- default snake -->
 * <xf-spinner :size="30" color="#999"></xf-spinner>
 */
  import SpinnerSnake from './snake.vue'
  import SpinnerDoubleBounce from './double-bounce.vue'
  import SpinnerTripleBounce from './triple-bounce.vue'
  import SpinnerFadingCircle from './fading-circle.vue'
const SPINNERS = [
  'snake', //0
  'double-bounce', //1
  'triple-bounce', //2
  'fading-circle' //3
];
const parseSpinner = function(index) {
  if (SPINNERS.length <= index) {
    console.wran(`${index} spinner not found, use the default spinner`)
    index = 0;
  }
  return SPINNERS[index]
}
export default {
  computed: {
    spinner() {
      return `spinner-${parseSpinner(this.type)}`
    }
  },
  components: {
    SpinnerSnake,
    SpinnerDoubleBounce,
    SpinnerTripleBounce,
    SpinnerFadingCircle
  },
  props: {
    type: {
      default: 0
    },
    size: {
      type: Number,
      default: 28
    },
    color: {
      type: String,
      default: '#ccc'
    }
  }
}
</script>

