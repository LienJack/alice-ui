<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  import { findComponentsDownward } from '../utils/assist.js';
  import Emitter from '../mixins/emitter.js'
  export default {
    name: 'radioGroup',
    mixins: [Emitter],
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
    },
    mounted() {
      this.updateValue();
    },
    data() {
      return {
        currentValue: this.value,
        childrens: []
      }
    },
    methods: {
      updateValue() {
        this.childrens = findComponentsDownward(this, 'radio');
        if (this.childrens) {
          this.childrens.forEach(child => {
            child.currentValue = this.currentValue === child.label;
            child.group = true;
          });
        }
      },
      change(data) {
        this.currentValue = data.value;
        this.updateValue();
        this.$emit('input', data.value);
        this.$emit('on-change', data.value);
        this.dispatch('FormItem', 'on-form-change', data.value);
      }
    },
    watch: {
      value() {
        if (this.currentValue !== this.value) {
          this.currentValue = this.value;
          this.$nextTick(() => {
            this.updateValue();
          });
        }
      }
    }
  }
</script>
