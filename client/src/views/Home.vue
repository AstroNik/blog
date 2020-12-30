<template>
  <div>
    <div class="img-con">
      <img alt="Vue logo" src="../assets/landing.png" class="landing-img" />
    </div>
    <div class="container">
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
.img-con {
  width: 100%;
}

.landing-img {
  max-width: 100%;
  max-height: 100%;
}
</style>
