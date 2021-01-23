<template>
  <main class="container">
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else>
      <div v-for="character in characters(page)" :key="character.id">
        {{ character.name }}
      </div>
      <Pagination :numberOfPages="numberOfCharPages" :page="Number(page)" />
    </div>
  </main>
</template>

<script>
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Characters",
  components: {
    Pagination,
    Loader,
  },
  data() {
    return {
      loading: false,
      error: "",
    };
  },
  props: ["page"],
  computed: {
    ...mapGetters(["characters", "numberOfCharPages"]),
  },
  methods: {
    ...mapActions(["fetchCharacters"]),
    fetchData() {
      this.loading = true;
      this.fetchCharacters(this.page).then((error) => {
        this.loading = false;
        this.error = error;
      });
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    page: "fetchData",
  },
};
</script>

<style>
</style>