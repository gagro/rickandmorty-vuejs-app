import VueRouter from "vue-router";
import routes from "./Routes";

// Router
const router = new VueRouter({
   mode: 'history',
   base: __dirname,
   routes
});

export default router;