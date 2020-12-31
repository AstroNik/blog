<template>
  <router-link
    id="title"
    v-bind:to="{ name: 'PostView', params: { id: post.postId, data: post } }"
  >
    <div>
      <br />
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
      <div class="d-inline-flex w-100">
        <p class="sub-text">Nikhil Kapadia on {{ post.tags }} |</p>
        <p class="sub-text">&nbsp;{{ date }}</p>
      </div>
      <hr />
    </div>
  </router-link>
</template>

<style>
#title {
  text-decoration: none;
  color: #494949;
}

#title:hover {
  color: black;
}

.sub-text {
  color: #969696;
  font-family: Arial, Helvetica, sans-serif;
}
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
      id: this.post.postId,
    };
  },
};
</script>