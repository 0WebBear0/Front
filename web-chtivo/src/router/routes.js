
const routes = [
  {
    path: '/',
    component: () => import('components/pages/HomePages/MainHomePage'),
    children: [
      {
        path: '/',
        component: () => import('components/templates/HomePages/Home')
      },
      {
        path: '/MyTitles',
        component: () => import('components/templates/HomePages/MyTitles'),
      },
      {
        path: '/AllTitles',
        component: () => import('components/templates/HomePages/AllTitles'),
      },
      {
        path: '/Schedule',
        component: () => import('components/templates/HomePages/Schedule'),
      },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)',
    component: () => import('components/pages/Error/Error404')
  }
]

export default routes
