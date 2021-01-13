<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">
      <router-link to="/">
        <img width="40px" src="/img/logo.png" alt="logo" />
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-show="!user">
          <router-link to="/login"> Login </router-link>
        </b-nav-item>
        <b-nav-item v-show="user">
          <router-link to="/createPost">Create Post</router-link>
        </b-nav-item>
        <b-nav-item v-show="user">
          <router-link to="/" v-on:click.native="logout">Logout</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    },
  },
};
</script>
