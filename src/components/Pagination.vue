<template>
  <div>
    <router-link :to="prevPage">ae</router-link>
    <router-link :to="nextPage">xD</router-link>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  computed: {
    prevPage() {
      const page = Number(this.$route.query.page);
      const pathname = this.$route.path;
      return `${pathname}?page=${page - 1}`;
    },
    nextPage() {
      const page = Number(this.$route.query.page);
      const pathname = this.$route.path;
      return `${pathname}?page=${page + 1}`;
    },
  },
};
</script>

<style scoped>
</style>