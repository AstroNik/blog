<template>
  <div>
    <a :href="url"> <h2>{{ post.title }}</h2> </a>
    <p>{{ post.content }}</p>
    <div class="d-inline-flex justify-content-between w-100">
      <p>Nikhil Kapadia on {{ post.tags }}</p>
      <p>{{ date }}</p>
    </div>
    <hr />
  </div>
</template>

<style>
</style>

<script>
import moment from "moment";

export default {
  name: "recentPostTile",
  props: {
    post: Object,
  },
  data() {
    return {
      date: moment(this.post.date).format("LL"),
      url: "/post/" + this.post.postId
    };
  },
};
</script>