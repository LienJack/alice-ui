import Vue from 'vue'
import context from './context'
import mask from '../../mask'


export default {
  open(vm, config) {
    // 添加到栈
    if(!context.stack.some(item => item.vm === vm)) {
      const el = vm.$el
      const target = el && el.parentNode ? el.parentNode : document.body
      context.stack.push({ vm, config, target })
      this.update()
    }
  },

  close(vm) {
    if(context.stack.length) {
      if(context.top.vm === vm) {
        context.stack.pop()
        this.update()
      } else {
        context.stack = context.stack.filter(item => item.vm !== vm)
      }
    }
  },
  // mask 控制器
  update() {
    let { modal } = context
    if(!modal) {
      let node = document.createElement('div')
      let modalCom = Vue.extend(mask) 
      modal = new modalCom().$mount(node)
      modal.$on('click', this.onClick)
    }
    context.modal = modal
    // 当不是第一次时候
    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if(context.top) {
      const top = context.top
      top.target.appendChild(context.modal.$el)
      Object.assign(context.modal, { visible: true })
    }
  },

  onClick() {
    if(context.top) {
      const vm = context.top.vm
      vm.$emit('click-mask')
      
      vm.closeOnClickMask && vm.$emit('input', false)
    }
  }
}

