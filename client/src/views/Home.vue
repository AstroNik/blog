<template>
  <div>
    <div class="img-con">
      <div class="landing-text">
        <h2>Nikhil Kapadia's Blog</h2>
        <span> Frameworks, Machine Learning, Neural Networks & More </span>
      </div>
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
  name: "Home",
  components: {
    RecentPosts,
  },
};
</script>

<style>
.img-con {
  position: relative;
  background-color: #f2f2f2;
}

.landing-text {
  position: absolute;
  text-align: center;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
}

@media (max-width: 575.98px) {
  .img-con {
    width: 100vw;
    height: 20vh;
  }
}

@media (min-width: 576px) {
  .img-con {
    width: 100vw;
    height: 20vh;
  }

  .landing-img {
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .img-con {
    width: 100vw;
    height: 30vh;
  }

  .landing-img {
    max-width: 100%;
  }
}

@media (min-width: 1200px) {
  .img-con {
    width: 100vw;
    height: 40vh;
  }
}
</style>
