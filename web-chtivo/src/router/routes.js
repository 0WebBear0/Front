import homePages from "src/router/HomePages";
import entity from "src/router/entitys";

const main = [
  {
    path: '/:catchAll(.*)',
    component: () =>
      import ('components/pages/Error/Error404')
  },
]

const routes = [...main, ...homePages, ...entity]



export default routes
