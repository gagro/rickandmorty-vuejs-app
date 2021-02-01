<template>
  <div class="pagination">
    <router-link :to="prevPage" :disabled="page === 1" tag="button">
      PREV
    </router-link>
    <div>{{ page }} / {{ numberOfPages }}</div>
    <router-link :to="nextPage" :disabled="page === numberOfPages" tag="button">
      NEXT
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

<style scoped lang="scss">
@import "@/css/_variables.scss";
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;

  button {
    background-color: transparent;
    border-color: transparent;
    margin: 0 10px;
    border-radius: 7px;
    color: #fff;
    box-shadow: 0px 0px 10px 3px $secondary-color;
    cursor: pointer;
  }
}
</style>