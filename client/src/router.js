import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CreatePost from "./views/CreatePost.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/createPost",
      name: "createPost",
      component: CreatePost
    },
    {
      path: "/post/:id",
      name: "post",
      component: () => import("./views/PostView.vue")
    }
  ]
});
