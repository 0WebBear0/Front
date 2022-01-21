const title = [
  {
    path: '/title',
    component: () => import('components/pages/TitlesPage/MainTitlePage'),
    children: [
      {
        path: ':titleId',
        name: 'titlePage',
        component: () => import('components/templates/EntityPages/EntityPage')
      },
      {
        path: ':titleId/chapters/',
        name: 'chapters',
        component: () => import('components/templates/EntityPages/ChapterList'),
      },
      {
        path: ':titleId/chapters/:chapterId',
        name: 'reader',
        component: () => import('components/templates/EntityPages/MainReader'),
      },
    ]
  },
]

export default title
