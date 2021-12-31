const entity = [
  {
    path: '/test',
    component: () => import('components/pages/TitlesPage/MainTitlePage'),
    children: [
      {
        path: '/test',
        component: () => import('components/templates/EntityPages/EntityPage')
      },
      {
        path: '/test/1',
        component: () => import('components/templates/EntityPages/ChapterList'),
      },
      {
        path: '/test/2',
        component: () => import('components/templates/EntityPages/MainReader'),
      },
    ]
  },
]

export default entity
