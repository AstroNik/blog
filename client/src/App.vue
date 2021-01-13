<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>

<style>
html {
  height: calc(100vh - 56.45px);
}
body {
  margin: 0;
  height: calc(100vh - 56.45px);
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #eeeeee;
}

#nav a.router-link-exact-active {
  color: #eeeeee;
  text-decoration: none;
}

</style>
