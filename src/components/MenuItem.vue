<template>
  <router-link :to="linkTo" v-slot="{ href, navigate, isActive }">
    <li class="link" :class="isActive && 'active'">
      <a :href="href" @click="navigate">{{ text }}</a>
    </li>
  </router-link>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["linkTo", "text"],
};
</script>

<style scoped>
.link {
  padding: 5px 30px;
  list-style: none;
}
.active {
  box-shadow: -5px 0px 10px 2px #00b0c8;
}
a {
  color: #fff;
  text-decoration: none;
}
</style>