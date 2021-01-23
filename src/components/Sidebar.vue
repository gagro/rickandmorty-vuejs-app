<template>
  <div class="sidebar">
    <div v-for="menuItem in menuItems" :key="menuItem.id">
      <div>
        {{ menuItem.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: "Characters",
        },
        {
          id: 2,
          name: "Locations",
        },
        {
          id: 3,
          name: "Episodes",
        },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  position: absolute;
  width: 15em;
}
</style>