import Vue from 'vue';
import Com from './alert.vue'
const AlertConstructor = Vue.extend(Com);
const instance = new AlertConstructor({
    el: document.createElement('div')
});

const hashChange = function () {
    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);
};

AlertConstructor.prototype.closeAlert = function () {
    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);
    window.removeEventListener("hashchange", hashChange);
    typeof this.callback === 'function' && this.callback();
};

const Alert = (options = {}) => {
    if(typeof options === 'string') {
      instance.content = options;
    } else {
      Object.assign(instance, options)
    }
    instance.isShow = true
    window.addEventListener("hashchange", hashChange);
    document.body.appendChild(instance.$el);
};

export default Alert;
