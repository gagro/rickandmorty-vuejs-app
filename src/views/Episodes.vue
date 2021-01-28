<template>
  <main class="container">
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else>
      <div class="responsive">
        <Episode
          v-for="episode in episodes(page)"
          :key="episode.id"
          :item="episode"
        />
      </div>
      <Pagination :numberOfPages="numberOfEpiPages" :page="Number(page)" />
    </div>
  </main>
</template>

<script>
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Episode from "../components/Episode";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Episodes",
  components: {
    Pagination,
    Loader,
    Episode,
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