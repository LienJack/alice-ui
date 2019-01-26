<template>
  <alice-cell 
    :class="[
      prefix,
      {'is-textarea':type === 'textarea'}, 
      ,cname]"
    :title="title"  
    :icon="iconLeft"
  >
    <textarea
      v-if="type === 'textarea'"
      @change="$emit('change', currentValue)"
      ref="textarea"
      :class="[`${prefix}-core`,`${prefix}-textarea`]"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      v-model="currentValue">
    </textarea>
    <input
      v-else
      :class="[`${prefix}-core`, 
      { 'text-left': textAlign === 'left'},
      { 'text-right': textAlign === 'right'},
      ]"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :value="currentValue"
      :type="type"
      @change="$emit('change',currentValue)"
      @focus="active = true"
      @input="handleInput"
   >
    <span class="alice-field-right" v-if="iconRight">
      <!-- <i  class="alice-icon" :class="'alice-icon-' + iconRight"></i> -->
      <alice-icon :name="iconRight"/>
    </span>
   <div class="alice-field-other">
     <slot name="other"></slot>
   </div>
  </alice-cell>
</template>

<script>
/**
 * mt-field
 * @param {string} [type=text] - field 类型，接受 text, textarea 等
 * @param {string} [title] - 标签
 * @param {string} [textAlign] - 输入框对齐方式
 * @param {string} [rows] - textarea 的 rows
 * @param {string} [placeholder] - placeholder
 * @param {string} [disabled] - disabled
 * @param {string} [readonly] - readonly
 * @param {string} [icon-left] - 左边的图标
 * @param {string} [icon-right] - 右边的图标
 * @param {object} [attr] - 设置原生属性，例如 :attr="{ maxlength: 10 }"
 *
 * @example
 * <mt-field v-model="value" title="用户名"></mt-field>
 * 
 */


import aliceCell from '../cell'
import aliceIcon from '../icon'
export default {
  name: 'field',
  mounted () {

  },
  components: { aliceCell, aliceIcon },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    iconLeft:String,
    iconRight:String,
    rows: String,
    title: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    disableClear: Boolean,
    cname: String,
    state: {
      type: String,
      default: 'default'
    },
    value: {},
    attr: Object,
    textAlign: String,
  },
   data() {
    return {
      active: false,
      currentValue: this.value,
      prefix: 'alice-field'
    };
  },
  methods: {
    handleInput(evt) {
      this.currentValue = evt.target.value;
    },
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.currentValue =val;
    },
    attr: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const target = [this.$refs.input, this.$refs.textarea];
          target.forEach(el => {
            if (!el || !attrs) return;
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
          });
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
 @import './main.scss';
</style>

