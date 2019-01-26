export default [
  {
    path: '/show/dialog',
    component: () => import('demo/page/show/dialogDemo')
  },
  {
    path: '/show/loading',
    component: () => import('demo/page/show/loadingDemo')
  },
  {
    path: '/show/popup',
    component: () => import('demo/page/show/popupDemo')
  },
  {
    path: '/show/tabs',
    component: () => import('demo/page/show/tabsDemo')
  },
]