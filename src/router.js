import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("./components/Home.vue"),
      children: [
        {
          path: "",
          name: "Society",
          component: () => import("./views/Society.vue")
        },
        {
          path: "visitor",
          name: "Visitors",
          component: () => import("./views/Visitors.vue")
        }
      ]
    }
  ]
});
