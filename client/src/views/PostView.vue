<template>
  <div>
    <div class="img-con">
      <img alt="img" :src="postData.img" class="landing-img" />
    </div>
    <div class="container pt-4 pb-4">
      <h1 class="post-title">{{ postData.title }}</h1>
      <span class="sub-title"> {{ date }} on {{ postData.tags }} </span>
      <div v-html="content" class="pt-4"></div>
    </div>
  </div>
</template>

<style>
.post-title {
  font-weight: 700;
}

.sub-title {
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
}

.img-con {
  overflow: hidden;
}

p img {
  width: 100%;
  object-fit: cover;
  text-align: center;
}

.landing-img {
  position: relative;
  display: table;
  width: 100%;
  height: 100%;
  background: #222 no-repeat center center;
  background-size: cover;
  overflow: hidden;
  object-fit: cover; /*magic*/
}

@media (max-width: 500px) {
  .img-con {
    width: 100vw;
    height: 30vh;
  }

  .post-title {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}

@media (min-width: 576px) {
  .img-con {
    width: 100vw;
    height: 45vh;
  }

  h1 {
    font-size: 2.3rem;
  }
  /* .post-title {
    font-size: 2.6rem;
  } */

  h2 {
    font-size: 2rem;
  }
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
  .img-con {
    width: 100vw;
    height: 65vh;
  }
}
</style>

<script>
import moment from "moment";
import marked from "marked";

export default {
  name: "PostView",
  // props: {
  //   post: Object
  // },
  data() {
    return {
      postData: this.$route.params.data,
      content: null,
      date: moment(this.$route.params.data.date).format("LL"),
    };
  },
  created() {
    this.content = marked(this.postData.content);
  },
};
</script>
