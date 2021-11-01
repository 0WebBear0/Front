
const routes = [
  {
    path: '/',
    component: () => import('components/pages/HomePages/Home'),
    // children: [
    //   { path: '', component: () => import('components/molecule') }
    // ]
  },
  {
    path: '/MyTitles',
    component: () => import('components/pages/HomePages/MyTitles'),
  },
  {
    path: '/AllTitles',
    component: () => import('components/pages/HomePages/AllTitles'),
  },
  {
    path: '/Schedule',
    component: () => import('components/pages/HomePages/Schedule'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)',
    component: () => import('components/pages/Error/Error404')
  }
]

export default routes
