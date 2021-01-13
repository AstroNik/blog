<template>
  <router-link
    id="title"
    v-bind:to="{ name: 'PostView', params: { id: post.postId, data: post } }"
  >
    <div>
      <br />
      <h2 class="post-title">{{ post.title }}</h2>
      <p v-html="postContent" class="content-text"></p>
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

.post-title {
  font-size: 2.1rem;
  font-weight: 700;
}

.sub-text {
  color: #969696;
  font-family: Arial, Helvetica, sans-serif;
}

.content-text {
  font-size: 0.9em;
}

@media (max-width: 575.98px) {
  .post-title {
    font-size: 1.8rem;
  }
}

@media (min-width: 576px) {
  .post-title {
    font-size: 2rem;
  }
}

@media (min-width: 768px) {
  .post-title {
    font-size: 2.2rem;
  }
}

@media (min-width: 1200px) {
 
}

</style>

<script>
import moment from "moment";
import marked from "marked";

export default {
  name: "recentPostTile",
  props: {
    post: Object,
  },
  data() {
    return {
      date: moment(this.post.date).format("LL"),
      id: this.post.postId,
      postContent: "",
    };
  },
  created() {
    let firstWords = this.post.content.split(" ");
    let sentenceShort = "";
    for (let i = 0; i < 26; i++) {
      sentenceShort += firstWords[i];
      if (i != 14) {
        sentenceShort += " ";
      }
    }
    this.postContent = marked(sentenceShort);
  },
};
</script>