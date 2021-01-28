<template>
  <div id="app">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from "../src/components/Sidebar";

export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: #000;
  color: #fff;
}
.container {
  margin-left: 15em;
  padding: 1em;
}
.responsive {
  display: flex;
  flex-flow: wrap;
}
</style>
