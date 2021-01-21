<template>
  <main>
    <div v-if="loading">hehehe</div>
    <div v-else>
      <div v-for="character in characters(page)" :key="character.id">
        {{ character.name }}
      </div>
      <Pagination />
    </div>
  </main>
</template>

<script>
import Pagination from "../components/Pagination";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Characters",
  components: {
    Pagination,
  },
  data() {
    return {
      loading: false,
      error: "",
    };
  },
  props: ["page"],
  computed: {
    ...mapGetters(["characters"]),
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
    "$route.query.page": "fetchData",
  },
};
</script>

<style>
</style>