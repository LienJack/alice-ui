export default [
  {
    path: '/form/cell',
    component: () => import('demo/page/form/cellDemo')
  },
  {
    path: '/form/checkbox',
    component: () => import('demo/page/form/checkboxDemo')
  },
  {
    path: '/form/collapse',
    component: () => import('demo/page/form/collapseDemo')
  },
  {
    path: '/form/radio',
    component: () => import('demo/page/form/radioDemo')
  },
  {
    path: '/form/slider',
    component: () => import('demo/page/form/sliderDemo')
  },
  {
    path: '/form/switch',
    component: () => import('demo/page/form/switchDemo')
  },
]