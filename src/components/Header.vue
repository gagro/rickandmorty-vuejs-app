<template>
  <div class="header">
    <img class="logo" src="../assets/logo.jpg" alt="" />
    <div class="links">
      <router-link to="/characters?page=1">
        <img src="../assets/alien.svg" alt="" />
      </router-link>
      <router-link to="/locations?page=1">
        <img src="../assets/saturn.svg" alt="" />
      </router-link>
      <router-link to="/episodes?page=1">
        <img src="../assets/cassette.svg" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
.header {
  height: 6em;

  img {
    width: 50%;
  }

  .links {
    display: flex;
    align-items: center;
    img {
      filter: invert(100%);
      height: 40px;
      width: auto;
    }
  }
}
</style>