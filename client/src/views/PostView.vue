<template>
  <div>
    <div class="img-con">
      <img alt="img" :src="postData.img" class="landing-img" />
    </div>
    <div class="container">
      <h1 class="post-title">{{ postData.title }}</h1>
      <span> {{ date }} on {{ postData.tags }} </span>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<style scoped>

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
}

@media (min-width: 768px) {
  .img-con {
    width: 100vw;
    height: 45vh;
  }
}

@media (min-width: 1200px) {
  .img-con {
    width: 100vw;
    height: 60vh;
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
