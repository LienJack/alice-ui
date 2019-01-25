<template>
  <transition :name="currentTransition">
    <div v-if="value" :class="positionClass" class="alice-popup">
      <slot/>
    </div>
  </transition>
</template>

<script>
import Popup from '../mixins/popup'
export default {
  name: 'popup',
  // mounted() {console.log(this)},
  mixins: [Popup],
  props: {
    position: String,
    transiton: String,
    isMask: {
      type: Boolean,
      default: true
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    currentTransition() {
      return this.transiton || (this.position ? `popup-slide-${this.position}` : `alice-fade`)
    },
    positionClass() {
      return this.position ? `alice-popup-${this.position}` : ''
    }
  }
}
</script>
<style lang="scss">
@import './main.scss';
</style>

