<template>
  <div>
    <div class="img-con">
      <img alt="img" :src="baseUrl" class="landing-img" />
    </div>
    <div class="container">
      <h1>{{ postData.title }}</h1>
      <span> {{ date }} on {{ postData.tags }} </span>
      <div v-html="content"></div>
    </div>
  </div>
</template>

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
      baseUrl: null,
    };
  },
  created() {
    this.content = marked(this.postData.content);
    this.baseUrl = window.location.origin +"/"+this.postData.img;
  },
};
</script>