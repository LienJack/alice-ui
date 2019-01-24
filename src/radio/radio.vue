<template>
  <label class="lien-radio">
    <span>
      <input 
        type="radio"
        :disabled="disabled"
        :checked="currentValue"
        @change="change"
        >
        <span></span>
        <span class="label" :class="{'disabled' : disabled}">
          <slot></slot>
        </span>
    </span>
    
  </label>
</template>

<script>
import { findComponentUpward } from '../utils/assist.js';
export default {
  name: 'radio',
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
      group: false,
      parent: null,
    }
  },
  mounted() {
    this.parent = findComponentUpward(this, 'radioGroup')
    if(this.parent) {
      this.group = true
    }
    if(this.group) {
      this.parent.updateValue(true)
    } else {
      this.updateValue()
    }
  },
  methods: {
    change (event) {
      if (this.disabled) {
          return false;
      }

      const checked = event.target.checked;
      this.currentValue = checked;

      const value = checked ? this.trueValue : this.falseValue;
      this.$emit('input', value);

      if (this.group) {
          if (this.label !== undefined) {
              this.parent.change({
                  value: this.label,
                  checked: this.value
              });
          }
      } else {
          this.$emit('on-change', value);
          this.dispatch('FormItem', 'on-form-change', value);
      }
    },
    updateValue () {
      this.currentValue = this.value === this.trueValue;
    },
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateValue();
      } else {
        throw 'Value should be trueValue or falseValue.';
      }
    }
  }
}
</script>

<style lang="scss">
@import './main.scss';
</style>


