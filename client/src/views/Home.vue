<template>
  <div>
    <div class="img-con">
      <div class="landing-text">
        <h1 class="page-title">Nikhil Kapadia's Blog</h1>
        <span class="sub-title">
          Frameworks, Machine Learning, DevOps & More
        </span>
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
  background-color: #f5f8fa;
  overflow-x: hidden;
}

.landing-text {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.page-title {
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
}

.sub-title {
  color: rgba(0, 0, 0, 0.5);
}

@media (max-width: 575.98px) {
  .img-con {
    width: 100vw;
    height: 20vh;
  }

  .page-title {
    font-size: 2.3rem;
  }
}

@media (min-width: 576px) {
  .img-con {
    width: 100vw;
    height: 20vh;
  }

  .page-title {
    font-size: 2.5rem;
  }
}

@media (min-width: 768px) {
  .img-con {
    width: 100vw;
    height: 30vh;
  }

  .page-title {
    font-size: 2.6rem;
  }
}

@media (min-width: 1200px) {
  .img-con {
    width: 100vw;
    height: 40vh;
  }
}
</style>
