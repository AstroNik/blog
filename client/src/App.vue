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
  overflow-x: hidden;
}
body {
  margin: 0;
  height: calc(100vh - 56.45px);
  overflow-x: hidden;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  justify-content: center;
}

h1, h2{
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
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

pre {
  box-sizing: border-box;
  margin: 0 0 1.75em 0;
  border: #e3edf3 1px solid;
  width: 100%;
  padding: 10px;
  font-family: Inconsolata, monospace, sans-serif;
  font-size: 0.9em;
  white-space: pre;
  overflow: auto;
  background: #f7fafb;
  border-radius: 3px;
}

code {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #f0f0f0;
  color: black;
}

blockquote {
  box-sizing: border-box;
  margin: 1.75em 0 1.75em -2.2em;
  padding: 0 0 0 1.75em;
  border-left: #4a4a4a 0.4em solid;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
  background: #f0f0f0;
}
</style>
