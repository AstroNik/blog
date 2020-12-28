<template>
  <div class="container-fluid">
    <div id="post">
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Title" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            placeholder="title"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="textarea-group-1" label="Body" label-for="textarea-1">
          <b-form-textarea
            id="textarea"
            v-model="form.content"
          ></b-form-textarea>
          <!-- <p>``` code ``` **bold** *italic* >quote</p> -->
        </b-form-group>

        <b-form-group id="input-group-2" label="Tags" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.tags"
            placeholder="tags"
          ></b-form-input>
        </b-form-group>

        <div id="body-preview"></div>

        <div class="text-right">
          <b-button type="submit" variant="primary">Post</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "createPost",
  data() {
    return {
      form: {
        title: "",
        date: null,
        content: "",
        tags: "",
      },
      content: null,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios.post("/api/createPost", {
          title: this.form.title,
          date: this.form.date,
          content: this.form.content,
          tages: this.form.tags,
        }, {
          headers: {
            'Content-Type' : 'application/json'
          },
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // onChange() {
    //   document.getElementById("body-preview").innerHTML = '';
    //   this.content = TP.processText(this.form.content);
    //   document.getElementById("body-preview").appendChild(this.content);
    // }
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