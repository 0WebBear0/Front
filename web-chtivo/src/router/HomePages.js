const homePages = [
  {
    path: '',
    component: () => import('components/pages/HomePages/MainHomePage'),
    children: [
      {
        path: '',
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
    ]
  },
  {
    path: '/Schedule',
    component: () => import('components/templates/HomePages/Schedule'),
  },
]

export default homePages
