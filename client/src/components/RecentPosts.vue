<template>
  <div>
    <RecentPostTile
      v-for="post in posts"
      v-bind:key="post.postId"
      :post="post"
    />
  </div>
</template>

<script>
import axios from "axios";
import RecentPostTile from "@/components/RecentPostTile";
export default {
  name: "RecentPosts",
  components: {
    RecentPostTile,
  },
  data() {
    return {
      posts: [
        {
          postId: 654,
          date: "2020-12-28T05:00:00.000+00:00",
          title: "Creating a blog 101",
          content: "**sdfgsdgf**\nkljsdfgsklsdfg\nsdkfhsdfg",
          tags: "sdfsd",
          // imgLink: "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        },
        {
          postId: 56,
          date: "2020-12-29T05:00:00.000+00:00",
          title: "Hell345o",
          content: "",
          tags: "cvbcvhbcvb",
          // imgLink: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        },
      ],
      errorMessage: "",
    };
  },
  created() {
    axios
      .get("/api/getLatestPosts")
      .then((res) => {
        this.posts = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
