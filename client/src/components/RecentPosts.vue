<template>
  <div class="hello">
    <h3>Latest Posts</h3>
    {{ posts }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "RecentPosts",
  data() {
    return {
      posts: {},
      errorMessage: "",
    };
  },
  created() {
    axios.get("/api/getLatestPosts").then((res) => {
      console.log(res);
    }).catch(error => {
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
