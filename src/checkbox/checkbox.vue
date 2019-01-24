<template>
  <label class="alice-checkbox">
    <span>
      <input 
        v-if="group"
        type="checkbox"
        :value="label"
        v-model="model"
        :disabled='isDisable'
        @change="change">
      <input 
        v-else
        type="checkbox"
        :disabled='isDisable'
        :checked="currentValue"
        @change="change">
        <span></span>
        <span class="label" :class="{'disabled' : isDisable}">
          <slot></slot>
        </span>
    </span>
      
  </label>
</template>
<script>
import { findComponentUpward } from '../utils/assist.js';
import Emitter from '../mixins/emitter.js'
export default {
  mixins: [Emitter],
  name: 'checkbox',
  props: {
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      // 只在一个时候使用
      type: [String, Number, Boolean],
      default: false,
    },
    trueValue: {
      type: [String, Number, Boolean ],
      default: true,
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value,
      model: [], // 多模式使用
      group: false,
      parent: null,
      maxDisabled: false, // 最大
    }
  },
  watch: {
    value(val) {
      if(val === this.trueValue || val === this.falseValue) {
        this.updateModel()
      } else {
        throw 'value shoul be trueValue or falseValue'
      }
    }
  },
  mounted() {
    this.parent = findComponentUpward(this, 'checkboxGroup')

    if(this.parent) {
      this.group = true
    }

    if(this.group) {
      this.parent.updateModel(true)
    } else {
      this.updateModel()
    }
  },
  methods: {
    change(event) {
      if(this.disabled) {
        return false
      }
      const checked = event.target.checked
      this.currentValue = checked
      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value) 

      if(this.group) {
        this.parent.change(this.model)
      } else {
        this.$emit('on-change', value)
        this.dispatch('formItem', 'on-form-change', value);
      }
    },
    updateModel() {
      this.currentValue = this.value === this.trueValue
    }
  },
  computed: {
    isDisable() {
      return this.disabled || this.maxDisabled
    }
  }
}
</script>

<style lang="scss">
@import './main.scss';
</style>


