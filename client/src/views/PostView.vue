<template>
  <div>
    <div class="img-con">
      <img alt="img" :src="{ imgLink }" class="landing-img" />
    </div>
    <div class="container">
      <div class="post-body">
        
      </div>
    </div>
  </div>
</template>

<script>
import * as TP from "../functions/TextProcess";

export default {
  name: "PostView",
  // props: {
  //   post: Object
  // },
  data() {
    return {
      imgLink: "",
      postData: this.$route.params.data
    };
  },
  created() {
    let content = TP.processText(this.postData.content);
    document.getElementById("post-body").appendChild(content);
  },
};
</script>