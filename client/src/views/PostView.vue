<template>
  <div>
    <div class="img-con">
      <img alt="img" :src="postData.imgLink" class="landing-img" />
    </div>
    <div class="container">
      <h1>{{ postData.title }}</h1>
      <span> {{ date }} on {{ postData.tags }} </span>
      <div v-html="content.outerHTML"></div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import * as TP from "../functions/TextProcess";

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
    let content = TP.processText(this.postData.content);
    this.content = content;
  },
};
</script>