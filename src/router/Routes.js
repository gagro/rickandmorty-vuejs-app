// Components
import Characters from "../views/Characters.vue";

// Routes
const routes = [
   {
      path: "/",
      redirect: {
         name: "Characters",
         query: {
            page: 1
         }
      }
   },
   {
      path: "/charcacters",
      name: "Characters",
      component: Characters,
      props: route => ({ page: Number(route.query.page) })
   }
];

export default routes;