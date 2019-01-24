<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import { findComponentsDownward } from '../utils/assist.js';
import Emitter from '../mixins/emitter.js'
export default {
  name: 'checkboxGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default() {
        return []
      },
    },
    max: Number
  },
  data() {
    return {
      currentValue: this.value,
      childrens: []
    }
  },
  methods: {
    updateModel(update) {
      this.childrens = findComponentsDownward(this, 'checkbox')
      if(this.childrens) {
        const value = this.value
        this.childrens.forEach(child => {
          child.model = value
          if(update) {
            child.currentValue = value.includes(child.label)
            // child.currentValue = value.indexOf(child.label) >= 0;
            if(this.max && this.value.length >= this.max) {
              child.maxDisabled = !value.includes(child.label)
            } else {
              child.maxDisabled = false
            }
            child.group = true
          }
        })
      }
    },
    change(data) {
      this.currentValue = data
      this.$emit('input', data)
      this.$emit('on-change', data)
      this.dispatch('formItem', 'on-form-change', data)
    }
  },
  mounted() {
    this.updateModel(true)
  },
  watch: {
    value() {
      this.updateModel(true)
    }
  }
}
</script>

