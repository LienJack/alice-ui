<template>
  <div class="alice-nav-bar alice-nav-bar-fixed" :style="style">
    <div class="alice-nav-bar-left" @click="$emit('click-left')">
      <slot name="left">
        <alice-icon
          name="keyboard_arrow_left"
          class="alice-icon"
          v-if="leftArrow"
        />
        <span
          v-if="leftText"
          v-text="leftText"
          class="alice-nav-bar-text"
        />
      </slot>
    </div>
    <div class="alice-nav-bar-title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="alice-nav-bar-right" @click="$emit('click-left')">
      <slot name="right" >
        <span
          v-if="rightText"
          v-text="rightText"
          class="alice-nav-bar-text"
        />
         <icon
          name="keyboard_arrow_right"
          class="alice-icon"
          v-if="rightArrow"
        />
      </slot>
    </div>
  </div>
</template>
<script>
import aliceIcon from '../icon'
export default {
  name: 'nav-bar',

  props: {
    title: String,
    fixed: Boolean,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    rightArrow: Boolean,
    zIndex: {
      type: Number,
      default: 1,
    }
  },
  components: { aliceIcon },
  computed: {
    style() {
      return {
        zIndex: this.zIndex
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './main.scss';
</style>

