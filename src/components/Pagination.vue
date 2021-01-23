<template>
  <div>
    <router-link :to="prevPage" :disabled="page === 1" tag="button">
      ae
    </router-link>
    {{ page }} / {{ numberOfPages }}
    <router-link :to="nextPage" :disabled="page === numberOfPages" tag="button">
      xD
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["page", "numberOfPages"],
  computed: {
    prevPage() {
      const pathname = this.$route.path;
      return `${pathname}?page=${this.page - 1}`;
    },
    nextPage() {
      const pathname = this.$route.path;
      return `${pathname}?page=${this.page + 1}`;
    },
  },
};
</script>

<style scoped>
</style>