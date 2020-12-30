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
          content: "sdfgsdgf",
          tags: "sdfsd",
        },
        {
          postId: 56,
          date: "2020-12-29T05:00:00.000+00:00",
          title: "Hell345o",
          content: "sdfgfgcvbsdgf",
          tags: "cvbcvhbcvb",
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
