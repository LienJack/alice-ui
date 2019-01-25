// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'material-design-icons/iconfont/material-icons.css'
import '@/style/animate.scss'
import '@/style/reset.css'
import '@/style/base'
import '@/index'

Vue.config.productionTip = false
import '@/index'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
