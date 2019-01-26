import Vue from 'vue';
import Com from './confirm'
// const ConfirmConstructor = Vue.extend(require('./confirm.vue'));

// const instance = new ConfirmConstructor({
//     el: document.createElement('div')
// });

const ConfirmConstructor = Vue.extend(Com);
const instance = new ConfirmConstructor({
    el: document.createElement('div')
});

const hashChange = function () {
    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);
};

ConfirmConstructor.prototype.closeConfirm = function (stay, callback) {
    let stopClose = true;
    if(typeof callback === 'function') {
        stopClose = callback();
        if(stopClose === undefined) stopClose = true;
    }
    if(!stopClose || stay) return;
    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);
    window.removeEventListener("hashchange", hashChange);
};

const Confirm = (options = {}, confirmCallback, cancelCallback) => {
    Object.assign(instance, options)
    instance.isShow = true
    confirmCallback && (instance.confirmCallback = confirmCallback)
    cancelCallback && (instance.cancelCallback = cancelCallback)
    window.addEventListener("hashchange", hashChange);
    document.body.appendChild(instance.$el);
};

export default Confirm;
