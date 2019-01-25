<template>
  <div class="alice-confirm-wrapper">
    <div class="alice-confirm-mask" @click.stop="isClickClose && comfirm()" v-show="isShow"></div>
   <transition name="fade">
      <div v-show="isShow">
        <div class="alice-confirm">
          <div class="alice-confirm-header">
            <div class="alice-confirm-title">
              <slot name="header"> {{title}} </slot>
            </div>
          </div>
          <div class="alice-confirm-content">
            <div class="alice-confirm-message">
              <slot name="content">{{content}}</slot>
            </div>
          </div>
          <div class="alice-confirm-btns">
            <button class="confirmButton" @click="comfirm">{{confirmBtn}}</button>
            <button class="cancelButton" @click="cancel">{{cancelBtn}}</button>
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
    confirmCallback: Function,
    cancelCallback: Function
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    comfirm () {
      this.closeConfirm(false, this.confirmCallback)
    },
    cancel() {
      this.closeConfirm(false, this.cancelCallback)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './main.scss';
</style>


