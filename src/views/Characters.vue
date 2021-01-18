<template>
  <div>Characters</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Characters",
  data() {
    return {
      loading: false,
      error: "",
    };
  },
  props: ["page"],
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
};
</script>

<style>
</style>