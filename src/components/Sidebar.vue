<template>
  <div class="sidebar">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="Logo" />
    </div>
    <MenuItem
      v-for="menuItem in menuItems"
      :key="menuItem.id"
      :linkTo="menuItem.path"
      :text="menuItem.name"
    />
  </div>
</template>

<script>
import MenuItem from "./MenuItem";

export default {
  name: "Sidebar",
  components: {
    MenuItem,
  },
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: "Characters",
          path: "/characters?page=1",
        },
        {
          id: 2,
          name: "Locations",
          path: "/locations?page=1",
        },
        {
          id: 3,
          name: "Episodes",
          path: "/episodes?page=1",
        },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  width: 15em;
  height: 100%;
  box-shadow: 0px 0px 10px 3px #78f05c;
}
img {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>