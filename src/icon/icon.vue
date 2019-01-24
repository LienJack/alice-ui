<template>
  <i 
    v-if="name"
    :class="[classes,cname]"
    :style="style"
    v-text="name">
  </i>
  <span v-else>
    <slot/>
  </span>
</template>

<script>
export default {
  name: 'icon',
  props: {
    name: String,
    size: {
      type: [Number, String],
      default: '24px'
    },
    color: String,
    classPrefix: {
      type: String,
      default: 'material-icons'
    },
    cname:String,
    isImg:{
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        { [`${this.classPrefix}`]: this.name ? true : false }
      ]
    },
    style() {
      return {
        color: this.color,
        fontSize: this.size
      }
    }
  }
}
</script>

<style lang="scss">
@import './main.scss';
</style>


