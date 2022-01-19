import homePages from "src/router/HomePages";
import title from "src/router/titles";

const main = [
  {
    path: '/:catchAll(.*)',
    component: () =>
      import ('components/pages/Error/Error404')
  },
]

const routes = [...main, ...homePages, ...title]



export default routes
