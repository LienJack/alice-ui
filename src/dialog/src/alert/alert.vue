<template>
  <div class="alice-alert-wrapper">
    <div class="alice-alert-mask" @click.stop="isClickClose && comfirm()" v-show="isShow"></div>
   <transition name="fade">
      <div v-show="isShow">
        <div class="alice-alert">
          <div class="alice-alert-header">
            <div class="alice-alert-title">
              <slot name="header"> {{title}} </slot>
            </div>
          </div>
          <div class="alice-alert-content">
            <div class="alice-alert-message">
              <slot name="content">{{content}}</slot>
            </div>
          </div>
          <div class="alice-alert-btns">
            <button class="confirmButton" @click="comfirm">{{confirmBtn}}</button>
          </div>
        </div>
      </div>
   </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '提示'
    },
    content: {
      type: String,
      default:'内容'
    },
    confirmBtn: {
      type: String,
      default: '确定'
    },
    cancelBtn: {
      type: String,
      default: '取消'
    },
    isClickClose: {
      type:Boolean,
      default:true
    },
    callback: Function
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    comfirm () {
      this.closeAlert()
    },
  }
}
</script>

<style lang="scss" scoped>
@import './main.scss';
</style>


