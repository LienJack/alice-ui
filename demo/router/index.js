import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import basePage from './base'
import formPage from './form'
import showPage from './show'
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: () => import('demo/page/index')
    },
    ...basePage,
    ...formPage,
    ...showPage,
  ],
})