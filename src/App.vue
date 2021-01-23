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
}
.container {
  margin-left: 15em;
}
</style>
