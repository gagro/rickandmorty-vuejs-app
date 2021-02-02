<template>
  <div id="app">
    <Header />
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Sidebar,
    Header,
  },
};
</script>

<style lang="scss">
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
  justify-content: center;
  flex-flow: wrap;
}
.responsiveItem {
  width: 20%;
}
.header {
  display: none;
}
@media only screen and (max-width: 1075px) {
  .container {
    margin-left: unset;
  }
  .responsiveItem {
    width: 40%;
    flex-grow: 1;
  }
  .sidebar {
    display: none;
  }
  .header {
    display: flex;
  }
}
</style>
