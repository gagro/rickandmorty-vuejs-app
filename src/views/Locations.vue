<template>
  <main class="container">
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else>
      <div v-for="location in locations(page)" :key="location.id">
        {{ location.name }}
      </div>
      <Pagination :numberOfPages="numberOfLocPages" :page="Number(page)" />
    </div>
  </main>
</template>

<script>
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Locations",
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
    ...mapGetters(["locations", "numberOfLocPages"]),
  },
  methods: {
    ...mapActions(["fetchLocations"]),
    fetchData() {
      this.loading = true;
      this.fetchLocations(this.page).then((error) => {
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