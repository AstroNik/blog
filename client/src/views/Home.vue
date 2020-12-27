<template>
  <div class="container-fluid">
    <div id="home">
      <!-- Here will be a picture of whatever my landing page will have -->
      <div class="img-con">
        <img alt="Vue logo" src="../assets/landing.png" class="landing-img" />
      </div>
      <!-- RecentBlogs will show 10 most recent posts -->
      <RecentPosts />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RecentPosts from "@/components/RecentPosts.vue";

export default {
  name: "home",
  components: {
    RecentPosts,
  },
};
</script>

<style>
#home {
  overflow: hidden;
  width: 80%;
  text-align: center;
  right: 12.5%;
  -ms-transform: translateX(12.5%);
  transform: translateX(12.5%);
}

.img-con {
  width: 100%;
  margin-bottom: -25px;
}

.landing-img {
  max-width: 100%;
  max-height: 100%;
}

@media (min-width: 768px) {
  .container-md {
    max-width: 1000px;
  }
}
</style>
