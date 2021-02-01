<template>
  <div class="loader" />
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped lang="scss">
@import "@/css/_variables.scss";
.loader {
  border: 5px solid $primary-color;
  border-top: 5px solid transparent;
  border-radius: 50%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: unset !important;
  padding-bottom: unset !important;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>