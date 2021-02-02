<template>
  <main class="container">
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else>
      <div class="responsive">
        <Location
          v-for="location in locations(page)"
          :key="location.id"
          :item="location"
        />
      </div>
      <Pagination :numberOfPages="numberOfLocPages" :page="Number(page)" />
    </div>
  </main>
</template>

<script>
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Location from "../components/Location";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Locations",
  components: {
    Pagination,
    Loader,
    Location,
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