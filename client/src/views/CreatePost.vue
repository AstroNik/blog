<template>
  <div class="container-fluid pt-4">
    <div id="post">
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Title" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            placeholder="title"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Landing Image"
          label-for="input-2"
        >
          <b-form-file
            id="input-2"
            v-model="img"
            placeholder="Choose a file or drop it here..."
            required
            :state="Boolean(img)"
          ></b-form-file>
        </b-form-group>

        <b-form-group id="textarea-group-1" label="Body" label-for="textarea-1">
          <b-form-textarea
            id="textarea"
            v-model="form.content"
            rows="10"
            v-on="onChange()"
            required
          ></b-form-textarea>
          <!-- <p>``` code ``` **bold** *italic* </p> -->
        </b-form-group>

        <b-form-group id="input-group-3" label="Tags" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.tags"
            placeholder="tags"
            required
          ></b-form-input>
        </b-form-group>

        <div v-html="content"></div>

        <div class="text-right pb-4">
          <b-button type="submit" variant="primary">Post</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import marked from "marked";

export default {
  name: "CreatePost",
  data() {
    return {
      loadPage: false,
      form: {
        title: "",
        content: "",
        tags: "",
      },
      content: null,
      img: null,
    };
  },
  methods: {
    onChange() {
      this.content = marked(this.form.content);
    },
    onSubmit(event) {
      event.preventDefault();
      const formData = new FormData();

      formData.append("title", this.form.title);
      formData.append("content", this.form.content);
      formData.append("tags", this.form.tags);
      formData.append("img", this.img);

      axios
        .post("/api/createPost", formData)
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
#post {
  width: 80%;
  right: 12.5%;
  -ms-transform: translateX(12.5%);
  transform: translateX(12.5%);
}
</style>