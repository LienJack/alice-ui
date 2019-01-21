<template>
  <component 
    is="button"
    :disabled ="disabled"
    :class="[classes,cname]"
    @click="onClick"
  >
    <slot name="btn-left" />
    <span class="alice-btn-text">
      <slot>{{ text }}</slot>
    </span>
    <slot name="btn-right" />
  </component>
</template>

<script>
const prefix = "alice-btn"
export default {
  name: 'alice-button',
  props: {
  text: String,
    disabled: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large'
        ].includes(value)
      }
    },
    type: { // 类型，可选值为 default primary danger 
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'primary',
          'danger'
        ].includes(value)
      },
    },
    cname: {
      type: String,
      default: '',
    },
  },
  computed:{
    classes() {
      return [
        `${prefix}`,
        `${prefix}-${this.size}`,
        `${prefix}-${this.type}`,
        ,{
          [`${prefix}-disabled`]:this.disabled,
          [`${prefix}-block`]:this.block,
          [`${prefix}-round`]:this.round,
          
        }
      ]
    }
  },
  methods: {
    onClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './main.scss';
</style>
