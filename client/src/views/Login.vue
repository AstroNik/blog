<template>
  <div class="container-fluid w-100 h-100">
    <div class="form-position">
      <div class="form-sizing">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Email" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="email"
              type="email"
              placeholder="email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="password"
              type="password"
              placeholder="password"
              required
            ></b-form-input>
          </b-form-group>

          <div class="text-right">
            <b-button type="submit" variant="primary">Login</b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-position {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-sizing {
  width: 50%;
  margin: 0 auto;
  border: 1px solid black;
  padding: 20px;
  border-radius: 1em;
}
</style>

<script>
import firebase from "firebase/app";
import {mapGetters} from 'vuex';

export default {
  name: "Login",
  computed: {
    ...mapGetters(["user"]),
    nextRoute() {
      return this.$route.query.redirect || "/";
    }
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  watch : {
    user(auth) {
      if (auth) {
        this.$router.replace(this.nextRoute);
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function (user) {
            console.log(user)
          },
          function (err) {
            alert("WHO ARE YOU?");
            console.log(err);
          }
        );
    },
  },
};
</script>