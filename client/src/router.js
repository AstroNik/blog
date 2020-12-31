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
      name: "Home",
      component: Home
    },
    {
      path: "/createPost",
      name: "CreatePost",
      component: CreatePost
    },
    {
      path: "/post/:id",
      name: "PostView",
      props: true,
      component: () => import("./views/PostView.vue")
    }
  ]
});
