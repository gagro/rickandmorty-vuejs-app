<template>
  <main class="container">
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else>
      <div v-for="episode in episodes(page)" :key="episode.id">
        {{ episode.name }}
      </div>
      <Pagination :numberOfPages="numberOfEpiPages" :page="Number(page)" />
    </div>
  </main>
</template>

<script>
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Episodes",
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
    ...mapGetters(["episodes", "numberOfEpiPages"]),
  },
  methods: {
    ...mapActions(["fetchEpisodes"]),
    fetchData() {
      this.loading = true;
      this.fetchEpisodes(this.page).then((error) => {
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