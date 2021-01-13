import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CreatePost from "./views/CreatePost.vue";
import Login from "./views/Login.vue"
import store from "./store";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/createPost",
    name: "CreatePost",
    component: CreatePost,
    meta: { authRequired: true }
  },
  {
    path: "/post/:id",
    name: "PostView",
    props: true,
    component: () => import("./views/PostView.vue")
  }
]

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeEach((to, _, next) => {
  if(to.matched.some(routeRecord => routeRecord.meta.authRequired)){
    if(!store.state.user) {
      next({
        path: "/",
        query: {redirect: to.fullPath}
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;