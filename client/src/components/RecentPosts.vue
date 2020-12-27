<template>
  <div class="hello">
    <h3>Latest Posts</h3>
    {{ posts }}
  </div>
</template>

<script>
export default {
  name: "RecentPosts",
  data() {
    return {
      posts: {},
      errorMessage: "",
    };
  },
  created() {
    const headers = { "Content-Type": "application/json" };

    fetch("/api/getLatestPosts", { headers })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          const error = (data && data.message) || res.statusText;
          return Promise.reject(error);
        }

        this.posts = data.posts;
      })
      .catch((error) => {
        this.errorMessage = error;
        console.log("Error getting latests posts! ", error);
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
